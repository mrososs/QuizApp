export interface Quiz {
    _id: string,
    code: string,
    title: string,
    description:string,
    status: string,
    instructor: string,  //id
    group: string ,  //id
    questions_number:  number,
    questions: questions[],
    schadule: string,
    duration: number,
    score_per_question: number,
    type: string,
    difficulty: string ,
    updatedAt: string,
    createdAt: string,
    __v: number,
    closed_at: string
}

export interface questions{
  _id: string,
  title: string ,
  options:options,
  answer: string
  }

export interface  options {
   A: string,
   B: string,
   C: string,
   D: string ,
   _id: string
 }
// --------------------
export interface UpdateQuiz {
  data:Quiz
  message:string
}

