import { useContentStyle } from "@/src/styling/useContentStyle";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const contentStyle = useContentStyle();

  return (
    <Tabs
      screenOptions={{ sceneStyle: contentStyle, headerStyle: contentStyle }}
    >
      <Tabs.Screen name="exercises" options={{ title: "Exercises" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
