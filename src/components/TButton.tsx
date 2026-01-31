import { Pressable, PressableProps, StyleSheet } from "react-native";
import { useTheme } from "../providers/ThemeProvider";
import { Spacing } from "../styling/spacing";
import { TText } from "./TText";

interface TButtonProps extends PressableProps {
  title: string;
}

export function TButton({ title, ...rest }: TButtonProps) {
  const styles = useStyles();

  return (
    <Pressable {...rest} style={styles.container}>
      <TText>{title}</TText>
    </Pressable>
  );
}

function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      padding: Spacing.sm_8,
    },
  });
}
