import { Stack } from "expo-router";
import { ExercisesProvider } from "../providers/ExercisesProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import { useContentStyle } from "../styling/useContentStyle";

export default function Root() {
  return (
    <ThemeProvider>
      <ExercisesProvider>
        <RootLayout />
      </ExercisesProvider>
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
      <Stack.Screen
        name="new-exercise"
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          title: "New Exercise",
        }}
      />
      <Stack.Screen
        name="exercise/[id]"
        options={{ headerShown: true, headerBackButtonDisplayMode: "minimal" }}
      />
    </Stack>
  );
}
