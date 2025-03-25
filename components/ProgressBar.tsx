import React from "react";
import { StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { colors } from "../constants/colors";

interface ProgressBarProps {
  progress: number; // 0 to 1
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ width: "0%" }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ type: "timing", duration: 300 }}
        style={styles.progress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: "hidden",
    width: "100%",
  },  
  progress: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});