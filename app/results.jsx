import React, { useEffect } from "react";
import { StyleSheet, Text, View, Pressable, BackHandler, FlatList, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import { fonts } from "../constants/fonts";
import { useQuizStore } from "../store/quizStore";
import { ResultItem } from "../components/ResultItem";

export default function ResultsScreen() {
  const { currentQuiz, currentQuizResult, resetQuiz } = useQuizStore();

  useEffect(() => {
    // Handle back button press
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Prevent going back to quiz
        handleGoHome();
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  // If no quiz or result, redirect to home
  if (!currentQuiz || !currentQuizResult) {
    router.replace("/");
    return null;
  }

  const handleGoHome = () => {
    resetQuiz();
    router.replace("/");
  };

  const correctAnswers = currentQuizResult.correctAnswers;
  const totalQuestions = currentQuizResult.totalQuestions;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (score >= 80) return "Excellent!";
    if (score >= 60) return "Good job!";
    if (score >= 40) return "Not bad!";
    return "Keep practicing!";
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
  
      <FlatList
        data={currentQuizResult.questionResults}
        keyExtractor={(item) => item.questionId}
        renderItem={({ item, index }) => {
          const question = currentQuiz.questions.find(q => q.id === item.questionId);
          if (!question) return null;
          
          return (
            <ResultItem
              question={question}
              isCorrect={item.isCorrect}
              selectedOptionId={item.selectedOptionId}
              index={index}
            />
          );
        }}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Pressable style={styles.backButton} onPress={handleGoHome}>
                <Feather name="home" size={24} color={colors.text} />
              </Pressable>
              <Text style={styles.headerTitle}>Quiz Results</Text>
            </View>
  
            <MotiView
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "timing", duration: 500 }}
              style={styles.scoreCard}
            >
              <Text style={styles.quizTitle}>{currentQuiz.title}</Text>
  
              <View style={styles.scoreContainer}>
                <View style={styles.scoreCircle}>
                  <Text style={styles.scoreText}>{score}%</Text>
                </View>
                <Text style={styles.scoreMessage}>{getScoreMessage()}</Text>
              </View>
  
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Feather name="check-circle" size={20} color={colors.success} />
                  <Text style={styles.statText}>
                    {correctAnswers} correct ({Math.round((correctAnswers / totalQuestions) * 100)}%)
                  </Text>
                </View>
  
                <View style={styles.statItem}>
                  <Feather name="x-circle" size={20} color={colors.error} />
                  <Text style={styles.statText}>
                    {totalQuestions - correctAnswers} incorrect ({Math.round(((totalQuestions - correctAnswers) / totalQuestions) * 100)}%)
                  </Text>
                </View>
              </View>
            </MotiView>
  
            <Text style={styles.sectionTitle}>Question Summary</Text>
          </>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <Pressable style={styles.button} onPress={handleGoHome}>
              <Feather name="home" size={20} color={colors.white} />
              <Text style={styles.buttonText}>Back to Home</Text>
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semiBold,
    color: colors.text,
  },
  scoreCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: spacing.lg,
    margin: spacing.lg,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  quizTitle: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semiBold,
    color: colors.text,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  scoreContainer: {
    alignItems: "center",
    marginVertical: spacing.md,
  },
  scoreCircle: {
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  scoreText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.xxl,
    fontWeight: fonts.weights.bold,
    color: colors.white,
  },
  scoreMessage: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semiBold,
    color: colors.text,
  },
  statsContainer: {
    marginTop: spacing.md,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  statText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.md,
    color: colors.text,
    marginLeft: spacing.sm,
  },
  sectionTitle: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semiBold,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
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
  buttonText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semiBold,
    color: colors.white,
    marginLeft: spacing.xs,
  },
});