export interface ExerciseSet {
  id: string;
  name: string;
  description: string;
  numberOfReps?: number;
  repDurationSeconds?: number;
  restBetweenRepsSeconds?: number;
}
