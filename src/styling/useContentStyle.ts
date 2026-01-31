import { StyleSheet } from "react-native";
import { useTheme } from "../providers/ThemeProvider";

export function useContentStyle() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    contentStyle: {
      backgroundColor: theme.colors.background,
    },
  });
  return styles.contentStyle;
}
