# Quiz Game - React Native Assessment

## 📌 Overview
This is a **React Native** mobile quiz application that allows users to play quizzes with multiple-choice questions. The app consists of two quizzes, each containing five questions. Users can select an answer, check their response, and proceed to the next question. At the end of the quiz, they receive a summary of their performance.

## 🚀 Features
- Displays a list of quizzes.
- Navigates to the quiz screen upon selection.
- Highlights selected answers and enables the "Check Answer" button.
- Shows correct/incorrect feedback after submission.
- Prevents navigating back after quiz start.
- Displays a result screen summarizing the correct and incorrect answers.

## 📱 Screens
### 1️⃣ Quiz List Screen
- Displays two available quizzes in a list.
- Tapping a quiz starts the quiz and navigates to the first question.

### 2️⃣ Quiz Screen
- Displays a question with four single-choice options.
- Highlights the selected option.
- Enables the "Check Answer" button upon selection.
- Shows feedback after submission:
  - ✅ Correct answers highlighted in **green**.
  - ❌ Incorrect answers highlighted in **red** with the correct answer in **green**.
- Replaces the check button with a "Next" button to proceed to the next question.

### 3️⃣ Results Screen
- Displays the number of correct and incorrect answers.
- Summarizes the user's performance.

## 🛠️ Tech Stack
- **React Native** (Expo)
- **Javascript**
- **State Management**: Zustand

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/dikjain/Quiz-master.git
   cd QUIZ-MASTER
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run the app:**
   ```sh
   npx expo start
   ```
   Scan the QR code using Expo Go (Android/iOS) to test the app.

## 🚀 Deployment Notes
- The app is built using **Expo**, making it easy to deploy and test.
- Can be ejected if required for native dependencies.

## 🏆 Bonus Features Implemented
✔️ **Disabled back navigation** to prevent quitting during an active quiz.
✔️ **Summary screen** displaying correct and incorrect answers.

## ❗ Challenges & Future Enhancements
- **Enhancements:**
  - Add a timer for each question.
  - Improve UI with animations.
  - Store quiz results for analytics.
- **Challenges Faced:**
  - Managing state efficiently while navigating between screens.
  - Implementing answer validation with smooth UI feedback.

## 📂 Repository
[GitHub Repository](https://github.com/dikjain/Quiz-master)

---

