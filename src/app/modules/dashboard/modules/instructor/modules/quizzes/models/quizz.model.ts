import { categories } from "../enums/categories.enum";
import { DifficultyLevel } from "../enums/difficultyLevel.enum";

export interface Quiz {
  title: string;
  description: string;
  group: string;
  questions_number: number;
  difficulty: DifficultyLevel;
  type: categories;
  schadule: string;
  duration: string;
  score_per_question: string;
}
