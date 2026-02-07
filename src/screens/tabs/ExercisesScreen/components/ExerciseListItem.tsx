import { TText } from "@/src/components/TText";
import { useTheme } from "@/src/providers/ThemeProvider";
import { Spacing } from "@/src/styling/spacing";
import { Exercise } from "@/src/types/exercise";
import { getExerciseDurationMinutes } from "@/src/utils/exerciseUtils";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

interface ExerciseListItemProps {
  exercise: Exercise;
}

export function ExerciseListItem({ exercise }: ExerciseListItemProps) {
  const styles = useStyles();
  const router = useRouter();

  const exerciseDurationSeconds = getExerciseDurationMinutes(exercise);

  const handlePress = () => {
    router.push(`/exercise/${exercise.id}`);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <TText>{exercise.name}</TText>
      <View style={styles.durationContainer}>
        <TText>{exerciseDurationSeconds}m</TText>
        <MaterialIcons name="access-time" size={Spacing.md_16} />
      </View>
    </Pressable>
  );
}

function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      padding: Spacing.md_16,
      backgroundColor: theme.colors.card,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    durationContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.xs_4,
    },
  });
}
