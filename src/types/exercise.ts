import { ExerciseSet } from "./exerciseSet";

export interface Exercise {
  id: string;
  name: string;
  description: string;
  sets: ExerciseSet[];
}
