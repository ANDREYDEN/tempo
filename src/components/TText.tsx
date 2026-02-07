import { StyleSheet, Text, TextProps } from "react-native";
import { useTheme } from "../providers/ThemeProvider";

type TTextVariant = "h1" | "h2" | "h3" | "h4" | "subtitle" | "body" | "label";
interface TTextProps extends TextProps {
  variant?: TTextVariant;
}

const variantStyles: Record<TTextVariant, TextProps["style"]> = {
  h1: { fontSize: 32 },
  h2: { fontSize: 28 },
  h3: { fontSize: 24 },
  h4: { fontSize: 20 },
  subtitle: { fontSize: 18, fontWeight: "600" },
  body: { fontSize: 16 },
  label: { fontSize: 14, letterSpacing: 1 },
};

export function TText({ children, variant = "body", ...rest }: TTextProps) {
  const styles = useStyles();
  return (
    <Text {...rest} style={[styles.text, variantStyles[variant], rest.style]}>
      {children}
    </Text>
  );
}

TText.H1 = function TTextH1(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="h1" />;
};
TText.H2 = function TTextH2(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="h2" />;
};
TText.H3 = function TTextH3(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="h3" />;
};
TText.H4 = function TTextH4(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="h4" />;
};
TText.Subtitle = function TTextSubtitle(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="subtitle" />;
};
TText.Body = function TTextBody(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="body" />;
};
TText.Label = function TTextLabel(props: Omit<TTextProps, "variant">) {
  return <TText {...props} variant="label" />;
};

function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    text: {
      color: theme.colors.text,
    },
  });
}
