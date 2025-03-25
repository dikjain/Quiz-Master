export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  imageUrl: string;
}

export interface QuizResult {
  quizId: string;
  correctAnswers: number;
  totalQuestions: number;
  questionResults: {
    questionId: string;
    isCorrect: boolean;
    selectedOptionId: string;
    correctOptionId: string;
  }[];
}