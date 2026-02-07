import { TText } from "@/src/components/TText";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { useExercises } from "../providers/ExercisesProvider";

export function ExerciseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  const { exerciseById } = useExercises();
  const exercise = exerciseById[id];

  useEffect(() => {
    navigation.setOptions({ title: exercise?.name ?? "Exercise" });
  }, [exercise?.name, navigation]);

  if (!exercise) {
    return (
      <View>
        <TText>Exercise not found</TText>
      </View>
    );
  }

  return (
    <View>
      <TText>{exercise.name}</TText>
    </View>
  );
}
