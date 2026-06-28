from pydantic import BaseModel


class AxisVector(BaseModel):
    """Position on the 6 scoring axes, each ranging from -1.0 to 1.0."""

    light_dark: float
    soft_sharp: float
    minimal_maximal: float
    classic_trendy: float
    romantic_practical: float
    natural_urban: float


class Question(BaseModel):
    id: str
    text: str
    options: list["QuestionOption"]


class QuestionOption(BaseModel):
    id: str
    text: str
    weights: AxisVector


class AestheticProfile(BaseModel):
    slug: str
    name: str
    group: str  # letter group this aesthetic belongs to, e.g. "a".."f"
    vector: AxisVector


class AestheticMatch(BaseModel):
    slug: str
    name: str
    percentage: float


class QuizSubmission(BaseModel):
    answers: dict[str, str]  # question_id -> option_id


class QuizResult(BaseModel):
    dna: list[AestheticMatch]  # ranked aesthetic breakdown, percentages sum to 100
    primary: AestheticMatch
    secondary: AestheticMatch
    accent: AestheticMatch
    fantasy: list[AestheticMatch]  # top 2, what you're drawn to
    wearable: list[AestheticMatch]  # top 2, what you'd actually wear
    style_formula: str
    vector: AxisVector
