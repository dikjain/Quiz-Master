import { create } from "zustand";

export const useQuizStore = create((set, get) => ({
  currentQuiz: null,
  currentQuestionIndex: 0,
  selectedOptionId: null,
  isAnswerChecked: false,
  quizResults: [],
  currentQuizResult: null,
  
  setCurrentQuiz: (quiz) => {
    set({
      currentQuiz: quiz,
      currentQuestionIndex: 0,
      selectedOptionId: null,
      isAnswerChecked: false,
      currentQuizResult: {
        quizId: quiz.id,
        correctAnswers: 0,
        totalQuestions: quiz.questions.length,
        questionResults: [],
      },
    });
  },
  
  resetQuiz: () => {
    set({
      currentQuiz: null,
      currentQuestionIndex: 0,
      selectedOptionId: null,
      isAnswerChecked: false,
      currentQuizResult: null,
    });
  },
  
  goToNextQuestion: () => {
    const { currentQuestionIndex, currentQuiz } = get();
    
    if (currentQuiz && currentQuestionIndex < currentQuiz.questions.length - 1) {
      set({
        currentQuestionIndex: currentQuestionIndex + 1,
        selectedOptionId: null,
        isAnswerChecked: false,
      });
    }
  },
  
  selectOption: (optionId) => {
    set({ selectedOptionId: optionId });
  },
  
  checkAnswer: () => {
    const { currentQuiz, currentQuestionIndex, selectedOptionId, currentQuizResult } = get();
    
    if (!currentQuiz || selectedOptionId === null || !currentQuizResult) return;
    
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(option => option.id === selectedOptionId);
    const correctOption = currentQuestion.options.find(option => option.isCorrect);
    
    if (!selectedOption || !correctOption) return;
    
    const isCorrect = selectedOption.isCorrect;
    
    const updatedQuizResult = {
      ...currentQuizResult,
      correctAnswers: isCorrect 
        ? currentQuizResult.correctAnswers + 1 
        : currentQuizResult.correctAnswers,
      questionResults: [
        ...currentQuizResult.questionResults,
        {
          questionId: currentQuestion.id,
          isCorrect,
          selectedOptionId,
          correctOptionId: correctOption.id,
        }
      ]
    };
    
    set({
      isAnswerChecked: true,
      currentQuizResult: updatedQuizResult,
    });
  },
  
  finishQuiz: () => {
    const { currentQuizResult, quizResults } = get();
    
    if (currentQuizResult) {
      set({
        quizResults: [...quizResults, currentQuizResult],
      });
    }
  },
}));