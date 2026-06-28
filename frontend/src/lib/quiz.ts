export type AxisVector = {
  light_dark: number;
  soft_sharp: number;
  minimal_maximal: number;
  classic_trendy: number;
  romantic_practical: number;
  natural_urban: number;
};

export type QuestionOption = {
  id: string;
  text: string;
  weights: AxisVector;
};

export type Question = {
  id: string;
  text: string;
  options: QuestionOption[];
};

export type AestheticMatch = {
  slug: string;
  name: string;
  percentage: number;
};

export type QuizResult = {
  dna: AestheticMatch[];
  primary: AestheticMatch;
  secondary: AestheticMatch;
  accent: AestheticMatch;
  fantasy: AestheticMatch[];
  wearable: AestheticMatch[];
  style_formula: string;
  vector: AxisVector;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not set");
}

export async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch(`${API_URL}/quiz/questions`);
  if (!res.ok) throw new Error("Failed to load quiz questions");
  return res.json();
}

export async function submitQuiz(answers: Record<string, string>): Promise<QuizResult> {
  const res = await fetch(`${API_URL}/quiz/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error("Failed to submit quiz");
  return res.json();
}

export const QUIZ_RESULT_STORAGE_KEY = "fya:quiz-result";

const QUIZ_PROGRESS_STORAGE_KEY = "fya:quiz-progress";
const QUIZ_PROGRESS_TTL_MS = 60 * 60 * 1000; // 1 hour

type QuizProgress = {
  answers: Record<string, string>;
  step: number;
  savedAt: number;
};

export function loadQuizProgress(): Omit<QuizProgress, "savedAt"> | null {
  const raw = sessionStorage.getItem(QUIZ_PROGRESS_STORAGE_KEY);
  if (!raw) return null;

  const parsed = JSON.parse(raw) as QuizProgress;
  if (Date.now() - parsed.savedAt > QUIZ_PROGRESS_TTL_MS) {
    sessionStorage.removeItem(QUIZ_PROGRESS_STORAGE_KEY);
    return null;
  }
  return parsed;
}

export function saveQuizProgress(progress: Omit<QuizProgress, "savedAt">) {
  sessionStorage.setItem(QUIZ_PROGRESS_STORAGE_KEY, JSON.stringify({ ...progress, savedAt: Date.now() }));
}

export function clearQuizProgress() {
  sessionStorage.removeItem(QUIZ_PROGRESS_STORAGE_KEY);
}
