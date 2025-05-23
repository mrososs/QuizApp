// models/closed-quiz-response.model.ts

export interface ClosedQuizResponse {
  quiz: ClosedQuiz;
  participants: Participant[];
}

export interface ClosedQuiz {
  _id: string;
  code: string;
  title: string;
  description: string;
  status: 'closed';
  instructor: string;
  group: string;
  questions_number: number;
  schadule: string;
  duration: number;
  score_per_question: number;
  type: string;
  difficulty: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
  closed_at: string;
}

export interface Participant {
  student: string | { name: string }; // adjust based on actual structure
  score: number;
  average: number;
  time_submitted: string;
}
