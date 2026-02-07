import { useExercises } from "@/src/providers/ExercisesProvider";
import { FlatList, View } from "react-native";
import { ExerciseListItem } from "./ExercisesScreen/components/ExerciseListItem";

export function ExercisesScreen() {
  const { exercises } = useExercises();

  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExerciseListItem exercise={item} />}
      />
    </View>
  );
}
