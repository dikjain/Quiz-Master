export const quizzes = [
  {
    id: "quiz1",
    title: "General Knowledge",
    description: "Test your knowledge on various general topics",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=40",
    questions: [
      {
        id: "q1_1",
        text: "What is the capital of France?",
        options: [
          { id: "q1_1_a", text: "London", isCorrect: false },
          { id: "q1_1_b", text: "Berlin", isCorrect: false },
          { id: "q1_1_c", text: "Paris", isCorrect: true },
          { id: "q1_1_d", text: "Madrid", isCorrect: false },
        ],
      },
      {
        id: "q1_2",
        text: "Which planet is known as the Red Planet?",
        options: [
          { id: "q1_2_a", text: "Venus", isCorrect: false },
          { id: "q1_2_b", text: "Mars", isCorrect: true },
          { id: "q1_2_c", text: "Jupiter", isCorrect: false },
          { id: "q1_2_d", text: "Saturn", isCorrect: false },
        ],
      },
      {
        id: "q1_3",
        text: "What is the largest ocean on Earth?",
        options: [
          { id: "q1_3_a", text: "Atlantic Ocean", isCorrect: false },
          { id: "q1_3_b", text: "Indian Ocean", isCorrect: false },
          { id: "q1_3_c", text: "Arctic Ocean", isCorrect: false },
          { id: "q1_3_d", text: "Pacific Ocean", isCorrect: true },
        ],
      },
      {
        id: "q1_4",
        text: "Who painted the Mona Lisa?",
        options: [
          { id: "q1_4_a", text: "Vincent van Gogh", isCorrect: false },
          { id: "q1_4_b", text: "Pablo Picasso", isCorrect: false },
          { id: "q1_4_c", text: "Leonardo da Vinci", isCorrect: true },
          { id: "q1_4_d", text: "Michelangelo", isCorrect: false },
        ],
      },
      {
        id: "q1_5",
        text: "What is the chemical symbol for gold?",
        options: [
          { id: "q1_5_a", text: "Go", isCorrect: false },
          { id: "q1_5_b", text: "Gd", isCorrect: false },
          { id: "q1_5_c", text: "Au", isCorrect: true },
          { id: "q1_5_d", text: "Ag", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "quiz2",
    title: "Science Quiz",
    description: "Challenge yourself with these science questions",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=40",
    questions: [
      {
        id: "q2_1",
        text: "What is the chemical formula for water?",
        options: [
          { id: "q2_1_a", text: "H2O", isCorrect: true },
          { id: "q2_1_b", text: "CO2", isCorrect: false },
          { id: "q2_1_c", text: "NaCl", isCorrect: false },
          { id: "q2_1_d", text: "O2", isCorrect: false },
        ],
      },
      {
        id: "q2_2",
        text: "Which of these is NOT a state of matter?",
        options: [
          { id: "q2_2_a", text: "Solid", isCorrect: false },
          { id: "q2_2_b", text: "Liquid", isCorrect: false },
          { id: "q2_2_c", text: "Gas", isCorrect: false },
          { id: "q2_2_d", text: "Mineral", isCorrect: true },
        ],
      },
      {
        id: "q2_3",
        text: "What is the closest planet to the Sun?",
        options: [
          { id: "q2_3_a", text: "Venus", isCorrect: false },
          { id: "q2_3_b", text: "Earth", isCorrect: false },
          { id: "q2_3_c", text: "Mercury", isCorrect: true },
          { id: "q2_3_d", text: "Mars", isCorrect: false },
        ],
      },
      {
        id: "q2_4",
        text: "What is the hardest natural substance on Earth?",
        options: [
          { id: "q2_4_a", text: "Gold", isCorrect: false },
          { id: "q2_4_b", text: "Iron", isCorrect: false },
          { id: "q2_4_c", text: "Diamond", isCorrect: true },
          { id: "q2_4_d", text: "Granite", isCorrect: false },
        ],
      },
      {
        id: "q2_5",
        text: "Which of these animals is a mammal?",
        options: [
          { id: "q2_5_a", text: "Snake", isCorrect: false },
          { id: "q2_5_b", text: "Dolphin", isCorrect: true },
          { id: "q2_5_c", text: "Crocodile", isCorrect: false },
          { id: "q2_5_d", text: "Shark", isCorrect: false },
        ],
      },
    ],
  },
];