import { createContext, PropsWithChildren, use } from "react";
import { Exercise } from "../types/exercise";

export interface ExercisesContextValue {
  exercises: Exercise[];
  exerciseById: Record<string, Exercise | undefined>;
}

const initialExercisesContextValue: ExercisesContextValue = {
  exercises: [],
  exerciseById: {},
};

export const ExercisesContext = createContext(initialExercisesContextValue);

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

export function ExercisesProvider({ children }: PropsWithChildren) {
  return (
    <ExercisesContext
      value={{
        exercises,
        exerciseById: Object.fromEntries(exercises.map((e) => [e.id, e])),
      }}
    >
      {children}
    </ExercisesContext>
  );
}

export function useExercises() {
  const context = use(ExercisesContext);

  if (!context) {
    throw new Error("useExercises must be used within an ExercisesProvider");
  }

  return context;
}
