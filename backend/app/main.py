import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import quiz

app = FastAPI(title="Find Your Aesthetic API")

allowed_origins = os.environ.get("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(quiz.router)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}
