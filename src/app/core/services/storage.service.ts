import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly TOKEN_KEY = 'accessToken';
  private readonly REFRESH_KEY = 'refreshToken';
  private readonly PROFILE_KEY = 'userProfile';
constructor() { }
 // Save login response
 saveLoginData(data: any): void {
  localStorage.setItem(this.TOKEN_KEY, data.accessToken);
  localStorage.setItem(this.REFRESH_KEY, data.refreshToken);
  localStorage.setItem(this.PROFILE_KEY, JSON.stringify(data.profile));
}
getAccessToken(): string | null {
  return localStorage.getItem(this.TOKEN_KEY);
}
getRefreshToken(): string | null {
  return localStorage.getItem(this.REFRESH_KEY);
}
getDecodedToken(): any | null {
  const token = this.getAccessToken();
  return token ? jwtDecode(token) : null;
}
getUserProfile(): any | null {
  const profile = localStorage.getItem(this.PROFILE_KEY);
  return profile ? JSON.parse(profile) : null;
}
getUserRole(): string | null {
  const decoded = this.getDecodedToken();
  return decoded?.role || null;
}
clearStorage(): void {
  localStorage.removeItem(this.TOKEN_KEY);
  localStorage.removeItem(this.REFRESH_KEY);
  localStorage.removeItem(this.PROFILE_KEY);
}

}
