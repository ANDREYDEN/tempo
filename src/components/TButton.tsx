import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";
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
    <Pressable {...rest} style={styles.container} accessibilityLabel={title}>
      <TText>{title}</TText>
    </Pressable>
  );
}

interface TButtonIconProps extends PressableProps {
  iconName: ComponentProps<typeof MaterialIcons>["name"];
  accessibilityLabel: string;
}
TButton.Icon = function TButtonIcon({
  iconName,
  accessibilityLabel,
  ...rest
}: TButtonIconProps) {
  return (
    <Pressable accessibilityLabel={accessibilityLabel} {...rest}>
      <MaterialIcons name={iconName} size={Spacing.lg_24} />
    </Pressable>
  );
};

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
