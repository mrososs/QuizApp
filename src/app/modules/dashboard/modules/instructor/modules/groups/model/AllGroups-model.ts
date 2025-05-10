
export interface AllGroups {
  _id: string,
  name: string,
  status: string,
  instructor: string      //id
  students: string[],    // all students id
  max_students: number
}
