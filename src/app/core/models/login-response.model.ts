export interface LoginResponse {
  message: string;
  data: LoginData;
}

export interface LoginData {
  accessToken: string;
  refreshToken: string;
  profile: UserProfile;
}

export interface UserProfile {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  role: string; // e.g., "Instructor", "Learner"
}
