// update && get by id
export interface UpdateGroupRes {
  data : GroupData ,
  message :string
}

export interface GroupData{
  _id: string ,    //group id
   name: string,
   status: string,
    instructor: string,
    students :students[] ,
    max_students: number

}
export interface students {
  _id: string,
  first_name: string,
  last_name: string,
  email: string
}

