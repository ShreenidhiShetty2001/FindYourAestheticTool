import math

from app.data.aesthetics import AESTHETICS
from app.data.questions import FANTASY_QUESTION_IDS, QUESTIONS, WEARABLE_QUESTION_IDS
from app.models.quiz import AestheticMatch, AxisVector, QuizResult, QuizSubmission

AXES = (
    "light_dark", "soft_sharp", "minimal_maximal",
    "classic_trendy", "romantic_practical", "natural_urban",
)
LETTERS = ("a", "b", "c", "d", "e", "f")


def _question_lookup() -> dict[str, dict[str, AxisVector]]:
    return {
        q.id: {opt.id: opt.weights for opt in q.options}
        for q in QUESTIONS
    }


def _average_vector(submission: QuizSubmission, question_ids: set[str] | None = None) -> AxisVector:
    lookup = _question_lookup()
    totals = {axis: 0.0 for axis in AXES}
    count = 0

    for question_id, option_id in submission.answers.items():
        if question_ids is not None and question_id not in question_ids:
            continue
        weights = lookup.get(question_id, {}).get(option_id)
        if weights is None:
            continue
        count += 1
        for axis in AXES:
            totals[axis] += getattr(weights, axis)

    if count == 0:
        return AxisVector(**{axis: 0.0 for axis in AXES})

    return AxisVector(**{axis: totals[axis] / count for axis in AXES})


def _letter_counts(submission: QuizSubmission, question_ids: set[str] | None = None) -> dict[str, int]:
    valid_question_ids = {q.id for q in QUESTIONS}
    counts = {letter: 0 for letter in LETTERS}

    for question_id, option_id in submission.answers.items():
        if question_id not in valid_question_ids:
            continue
        if question_ids is not None and question_id not in question_ids:
            continue
        if option_id in counts:
            counts[option_id] += 1

    return counts


def _distance(a: AxisVector, b: AxisVector) -> float:
    return math.sqrt(sum((getattr(a, axis) - getattr(b, axis)) ** 2 for axis in AXES))


def _best_in_group(letter: str, vector: AxisVector) -> AestheticMatch:
    candidates = [profile for profile in AESTHETICS if profile.group == letter]
    best = min(candidates, key=lambda profile: _distance(vector, profile.vector))
    return AestheticMatch(slug=best.slug, name=best.name, percentage=0.0)


def _ranked_letters(counts: dict[str, int], top_n: int) -> list[str]:
    ranked = sorted(LETTERS, key=lambda letter: counts[letter], reverse=True)
    return [letter for letter in ranked if counts[letter] > 0][:top_n]


def _matches_for_letters(letters: list[str], counts: dict[str, int], vector: AxisVector) -> list[AestheticMatch]:
    total = sum(counts[letter] for letter in letters) or 1
    matches = []
    for letter in letters:
        match = _best_in_group(letter, vector)
        percentage = round(counts[letter] / total * 100, 1)
        matches.append(AestheticMatch(slug=match.slug, name=match.name, percentage=percentage))
    return matches


def _style_formula(vector: AxisVector) -> str:
    silhouette = "Sharp silhouettes" if vector.soft_sharp > 0 else "Soft silhouettes"
    color = "moody, dark colors" if vector.light_dark < 0 else "neutral, light colors"
    finish = "polished, minimal beauty" if vector.minimal_maximal < 0 else "expressive, maximal beauty"
    detail = "one practical, easy detail" if vector.romantic_practical > 0 else "one dramatic detail"
    return " + ".join([silhouette, color, finish, detail])


def score_submission(submission: QuizSubmission) -> QuizResult:
    overall_vector = _average_vector(submission)
    fantasy_vector = _average_vector(submission, FANTASY_QUESTION_IDS)
    wearable_vector = _average_vector(submission, WEARABLE_QUESTION_IDS)

    overall_counts = _letter_counts(submission)
    fantasy_counts = _letter_counts(submission, FANTASY_QUESTION_IDS)
    wearable_counts = _letter_counts(submission, WEARABLE_QUESTION_IDS)

    dna_letters = _ranked_letters(overall_counts, top_n=4)
    dna = _matches_for_letters(dna_letters, overall_counts, overall_vector)
    # pad out to 3 entries (primary/secondary/accent) even on short submissions
    while len(dna) < 3:
        dna.append(AestheticMatch(slug="", name="", percentage=0.0))

    fantasy_letters = _ranked_letters(fantasy_counts, top_n=2)
    fantasy = _matches_for_letters(fantasy_letters, fantasy_counts, fantasy_vector)

    wearable_letters = _ranked_letters(wearable_counts, top_n=2)
    wearable = _matches_for_letters(wearable_letters, wearable_counts, wearable_vector)

    return QuizResult(
        dna=dna,
        primary=dna[0],
        secondary=dna[1],
        accent=dna[2],
        fantasy=fantasy,
        wearable=wearable,
        style_formula=_style_formula(overall_vector),
        vector=overall_vector,
    )
