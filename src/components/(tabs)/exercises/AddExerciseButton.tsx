import { Spacing } from "@/src/styling/spacing";
import { Link } from "expo-router";
import { TButton } from "../../TButton";

export function NewExerciseButton() {
  return (
    <Link href="/new-exercise" asChild>
      <TButton.Icon
        iconName="add-circle-outline"
        accessibilityLabel="New Exercise"
        style={{ margin: Spacing.sm_8 }}
      />
    </Link>
  );
}
