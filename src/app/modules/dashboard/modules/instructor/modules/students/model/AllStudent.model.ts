export interface AllStudent {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status?: string;
  role?: string;
  group?: StudentGroup;
}

export interface StudentGroup {
  _id: string;
  name: string;
  status: string;
  instructor: string;
  students: string[];
  max_students: number;
  updatedAt: string;
  createdAt: string;
}