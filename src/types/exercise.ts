import { ExerciseSet } from "./exerciseSet";

export interface Exercise {
  id: string;
  name: string;
  description: string;
  numberOfSets: number;
  restBetweenSetsSeconds: number;
  set: ExerciseSet;
}
