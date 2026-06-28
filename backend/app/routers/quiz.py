from fastapi import APIRouter

from app.data.questions import QUESTIONS
from app.models.quiz import QuizResult, QuizSubmission
from app.scoring import score_submission

router = APIRouter(prefix="/quiz", tags=["quiz"])


@router.get("/questions")
def get_questions() -> list:
    return QUESTIONS


@router.post("/submit", response_model=QuizResult)
def submit_quiz(submission: QuizSubmission) -> QuizResult:
    return score_submission(submission)
