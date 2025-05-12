import { Students } from "./students"

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
    students :Students[] ,
    max_students: number

}
export interface updateParams {
name: string,
 students: any
}

