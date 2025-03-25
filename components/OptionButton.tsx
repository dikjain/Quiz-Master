import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import { fonts } from "../constants/fonts";
import { Option } from "../types/quiz";

interface OptionButtonProps {
  option: Option;
  index: number;
  isSelected: boolean;
  isAnswerChecked: boolean;
  onSelect: (optionId: string) => void;
  disabled: boolean;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  index,
  isSelected,
  isAnswerChecked,
  onSelect,
  disabled,
}) => {
  const getBackgroundColor = () => {
    if (!isAnswerChecked) {
      return isSelected ? colors.primaryLight : colors.cardBackground;
    }
    
    if (option.isCorrect) {
      return colors.success;
    }
    
    return isSelected ? colors.error : colors.cardBackground;
  };

  const getBorderColor = () => {
    if (!isAnswerChecked) {
      return isSelected ? colors.primary : colors.border;
    }
    
    if (option.isCorrect) {
      return colors.success;
    }
    
    return isSelected ? colors.error : colors.border;
  };

  const getIconName = () => {
    if (!isAnswerChecked) return null;
    
    if (option.isCorrect) {
      return "check-circle";
    }
    
    return isSelected && !option.isCorrect ? "x-circle" : null;
  };

  const iconName = getIconName();

  return (
    <MotiView
      from={{ opacity: 0, translateX: -20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: index * 100, type: "timing", duration: 300 }}
    >
      <Pressable
        style={({ pressed }) => [
          styles.container,
          { backgroundColor: getBackgroundColor(), borderColor: getBorderColor() },
          pressed && !disabled && styles.pressed,
        ]}
        onPress={() => onSelect(option.id)}
        disabled={disabled || isAnswerChecked}
      >
        <Text style={[
          styles.optionText,
          isAnswerChecked && option.isCorrect && styles.correctText,
          isAnswerChecked && isSelected && !option.isCorrect && styles.incorrectText,
        ]}>
          {option.text}
        </Text>
        
        {iconName && (
          <View style={styles.iconContainer}>
            <Feather 
              name={iconName} 
              size={20} 
              color={option.isCorrect ? colors.white : colors.white} 
            />
          </View>
        )}
      </Pressable>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  optionText: {
    fontFamily: fonts.families.regular,
    fontSize: fonts.sizes.md,
    color: colors.text,
    flex: 1,
  },
  correctText: {
    color: colors.white,
    fontWeight: fonts.weights.semiBold,
  },
  incorrectText: {
    color: colors.white,
    fontWeight: fonts.weights.semiBold,
  },
  iconContainer: {
    marginLeft: spacing.sm,
  },
});