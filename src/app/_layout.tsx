import { Stack } from "expo-router";
import { ThemeProvider } from "../providers/ThemeProvider";
import { useContentStyle } from "../styling/useContentStyle";

export default function Root() {
  return (
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
  );
}

function RootLayout() {
  const contentStyle = useContentStyle();

  return (
    <Stack screenOptions={{ contentStyle, headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="intro" />
    </Stack>
  );
}
