export interface IChangePassword {
    password: string;
    password_new: string;
    password_confirm: string;
  }
  export interface ChangePasswordResponse {
    message: string;
    data: {
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      status: string;
      role: string;
    };
  }
  