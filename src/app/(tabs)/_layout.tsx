import { Spacing } from "@/src/styling/spacing";
import { useContentStyle } from "@/src/styling/useContentStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const contentStyle = useContentStyle();

  return (
    <Tabs
      screenOptions={{ sceneStyle: contentStyle, headerStyle: contentStyle }}
    >
      <Tabs.Screen
        name="exercises"
        options={{
          title: "Exercises",
          tabBarIcon: () => (
            <MaterialIcons name="play-arrow" size={Spacing.lg_24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <MaterialIcons name="settings" size={Spacing.lg_24} />
          ),
        }}
      />
    </Tabs>
  );
}
