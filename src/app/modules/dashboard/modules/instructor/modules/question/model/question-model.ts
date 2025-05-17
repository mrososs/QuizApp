

export interface Question {
  _id: string,
  title: string,
  description: string,
  options : Options ,
  answer: string,
  status: string,
  instructor: string,
  difficulty: string,
  points: number,
  type: string ,
  updatedAt?: string,
  createdAt?: string,
   __v ?: number
}
export interface Options {
  A: string,
  B: string ,
  C: string,
  D: string,
  _id: string
}

export interface UpdateQuestion {
  data : Question ,
  message :string
}

