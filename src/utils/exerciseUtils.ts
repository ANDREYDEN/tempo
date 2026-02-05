import { Exercise } from "../types/exercise";

export function getExerciseDurationMinutes(exercise: Exercise): number {
  const { set, numberOfSets, restBetweenSetsSeconds } = exercise;
  const setDurationSeconds =
    set.numberOfReps * (set.repDurationSeconds ?? 0) +
    (set.restBetweenRepsSeconds ?? 0) * (set.numberOfReps - 1);

  const exerciseDurationSeconds =
    numberOfSets * setDurationSeconds +
    (numberOfSets - 1) * restBetweenSetsSeconds;

  return Math.ceil(exerciseDurationSeconds / 60);
}
