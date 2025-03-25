import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import { fonts } from "../constants/fonts";


export const ResultItem = ({
  question,
  isCorrect,
  selectedOptionId,
  index,
}) => {
  const selectedOption = question.options.find(
    (option) => option.id === selectedOptionId
  );
  
  const correctOption = question.options.find((option) => option.isCorrect);

  if (!selectedOption || !correctOption) {
    return null;
  }

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 100, type: "timing", duration: 300 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={[
          styles.statusIndicator,
          { backgroundColor: isCorrect ? colors.success : colors.error }
        ]}>
          <Feather
            name={isCorrect ? "check" : "x"}
            size={16}
            color={colors.white}
          />
        </View>
        <Text style={styles.questionText}>{question.text}</Text>
      </View>
      
      <View style={styles.optionsContainer}>
        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Your answer:</Text>
          <Text style={[
            styles.optionText,
            { color: isCorrect ? colors.success : colors.error }
          ]}>
            {selectedOption.text}
          </Text>
        </View>
        
        {!isCorrect && (
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Correct answer:</Text>
            <Text style={[styles.optionText, { color: colors.success }]}>
              {correctOption.text}
            </Text>
          </View>
        )}
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  statusIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
    marginTop: 2,
  },
  questionText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.md,
    color: colors.text,
    flex: 1,
    fontWeight: fonts.weights.medium,
  },
  optionsContainer: {
    marginLeft: spacing.xl,
  },
  optionRow: {
    flexDirection: "row",
    marginBottom: spacing.xs,
  },
  optionLabel: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.sm,
    color: colors.textLight,
    width: 170,
  },
  optionText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.medium,
    flex: 1,
  },
});