import React, { useEffect } from "react";
import { StyleSheet, Text, View, Pressable, BackHandler, StatusBar, TextStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import { fonts } from "../constants/fonts";
import { useQuizStore } from "../store/quizStore";
import { OptionButton } from "../components/OptionButton";
import { ProgressBar } from "../components/ProgressBar";

export default function QuizScreen() {
  const {
    currentQuiz,
    currentQuestionIndex,
    selectedOptionId,
    isAnswerChecked,
    selectOption,
    checkAnswer,
    goToNextQuestion,
    finishQuiz,
    resetQuiz,
  } = useQuizStore();

  useEffect(() => {
    // Handle back button press
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Prevent going back during quiz
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  if (!currentQuiz) {
    router.replace("/");
    return null;
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;
  const progress = (currentQuestionIndex + 1) / currentQuiz.questions.length;

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      finishQuiz();
      router.push("/results");
    } else {
      goToNextQuestion();
    }
  };

  const handleExitQuiz = () => {
    resetQuiz();
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      
      <View style={styles.header}>
        <Pressable style={styles.exitButton} onPress={handleExitQuiz}>
          <Feather name="x" size={24} color={colors.text} />
        </Pressable>
        
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Question {currentQuestionIndex + 1}/{currentQuiz.questions.length}
          </Text>
          <ProgressBar progress={progress} />
        </View>
      </View>
      
      <View style={styles.content}>
        <MotiView
          key={currentQuestion.id}
          from={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 300 }}
        >
          <Text style={styles.questionText }>{currentQuestion.text}</Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <OptionButton
                key={option.id}
                option={option}
                index={index}
                isSelected={selectedOptionId === option.id}
                isAnswerChecked={isAnswerChecked}
                onSelect={selectOption}
                disabled={isAnswerChecked}
              />
            ))}
          </View>
        </MotiView>
      </View>
      
      <View style={styles.footer}>
        {!isAnswerChecked ? (
          <Pressable
            style={[
              styles.button,
              !selectedOptionId && styles.buttonDisabled,
            ]}
            onPress={checkAnswer}
            disabled={!selectedOptionId}
          >
            <Text style={styles.buttonText}>Check Answer</Text>
          </Pressable>
        ) : (
          <Pressable
            style={[styles.button, { backgroundColor: colors.secondary }]}
            onPress={handleNextQuestion}
          >
            <Text style={styles.buttonText}>
              {isLastQuestion ? "See Results" : "Next Question"}
            </Text>
            <Feather name="arrow-right" size={20} color={colors.white} />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  exitButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressContainer: {
    marginTop: spacing.sm,
  },
  progressText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.sm,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  questionText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semiBold ,
    color: colors.text,
    marginBottom: spacing.xl,
  },
  optionsContainer: {
    marginTop: spacing.md,
  },
  footer: {
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.cardBackground,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "row",
  },
  buttonDisabled: {
    backgroundColor: colors.disabled,
  },
  buttonText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semiBold,
    color: colors.white,
    marginRight: spacing.xs,
  },
});