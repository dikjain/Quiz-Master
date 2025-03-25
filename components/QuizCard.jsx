import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import { fonts } from "../constants/fonts";
import { Quiz } from "../types/quiz";
import { useQuizStore } from "../store/quizStore";


export const QuizCard = ({ quiz, index }) => {
  const setCurrentQuiz = useQuizStore((state) => state.setCurrentQuiz);

  const handleStartQuiz = () => {
    setCurrentQuiz(quiz);
    router.push("/quiz");
  };

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 100, type: "timing", duration: 500 }}
    >
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressed,
        ]}
        onPress={handleStartQuiz}
      >
        <Image source={{ uri: quiz.imageUrl }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{quiz.title}</Text>
          <Text style={styles.description}>{quiz.description}</Text>
          <View style={styles.footer}>
            <View style={styles.infoContainer}>
              <Feather name="help-circle" size={16} color={colors.textLight} />
              <Text style={styles.infoText}>{quiz.questions.length} questions</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start Quiz</Text>
              <Feather name="arrow-right" size={16} color={colors.white} />
            </View>
          </View>
        </View>
      </Pressable>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    marginBottom: spacing.lg,
    overflow: "hidden",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    borderWidth :1,
    borderColor : colors.black,
        shadowRadius: 8,
    elevation: 3,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: "100%",
    height: 160,
    borderBottomWidth : 2,
    borderBottomColor : "black",
    resizeMode: "cover",
  },
  contentContainer: {
    padding: spacing.lg,
  },
  title: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.md,
    color: colors.textLight,
    marginBottom: spacing.lg,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.sm,
    color: colors.textLight,
    marginLeft: spacing.xs,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.medium,
    color: colors.white,
    marginRight: spacing.xs,
  },
});