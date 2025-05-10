export interface IUpcomingQuizzes {
  _id: string;
  code: string;
  title: string;
  description: string;
  status: 'open' | 'closed';
  instructor: string;
  group: string;
  questions_number: number;
  questions: Question[];
  schadule: string; // ISO Date string
  duration: number;
  score_per_question: number;
  type: string; // You may refine to a union like 'BE' | 'MCQ'
  difficulty: 'easy' | 'medium' | 'hard';
  updatedAt: string;
  createdAt: string;
  __v: number;
  participants: number;
}

export interface Question {
  _id: string;
  title: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    _id: string;
  };
}
