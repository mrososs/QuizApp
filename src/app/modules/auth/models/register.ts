export interface RegisterRes {
  message: string,
  data: RegisterData
}

export interface RegisterData {
      first_name: string ,
      last_name: string,
      email: string,
      status: string,
      role: string,
      _id: string,
      updatedAt: string ,
      createdAt: string ,
      __v: number
  }


  export interface RegisterParams {
    first_name: string ,
    last_name: string,
    email: string,
    password:string,
    role:string
  }
