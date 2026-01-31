import { StyleSheet, Text, TextProps } from "react-native";
import { useTheme } from "../providers/ThemeProvider";

interface TTextProps extends TextProps {}

export function TText({ children, ...rest }: TTextProps) {
  const styles = useStyles();
  return (
    <Text {...rest} style={styles.text}>
      {children}
    </Text>
  );
}

function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontSize: 16,
    },
  });
}
