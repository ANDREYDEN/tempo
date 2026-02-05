import { Exercise } from "@/src/types/exercise";
import { FlatList, View } from "react-native";
import { ExerciseListItem } from "./ExercisesScreen/components/ExerciseListItem";

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Ring Dips",
    description: "Perform dips using gymnastic rings.",
    numberOfSets: 3,
    restBetweenSetsSeconds: 120,
    set: {
      id: "1",
      name: "Set 1",
      description: "Set of ring dips.",
      numberOfReps: 8,
    },
  },
  {
    id: "2",
    name: "7-3",
    description: "A climbing training exercise.",
    numberOfSets: 5,
    restBetweenSetsSeconds: 90,
    set: {
      id: "2",
      name: "Set 1",
      description: "Set of 7-3 exercise.",
      repDurationSeconds: 7,
      restBetweenRepsSeconds: 3,
      numberOfReps: 12,
    },
  },
];

export function ExercisesScreen() {
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
