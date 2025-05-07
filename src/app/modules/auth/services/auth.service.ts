import { ILogin } from './../models/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../../../core/services/storage.service';
import { LoginResponse } from '../../../core/models/login-response.model';
import { RegisterParams, RegisterRes } from '../models/register';
import { IForgot } from '../models/forgot';
import {
  ChangePasswordResponse,
  IChangePassword,
} from '../../../core/models/change-pass.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private storageService: StorageService
  ) {}


register(data:RegisterParams):Observable<RegisterRes>{
  return this._http.post<RegisterRes>(`auth/register` , data)
}

  login(data: ILogin): Observable<LoginResponse> {
    return this._http.post<LoginResponse>('auth/login', data).pipe(
      tap((res: LoginResponse) => {
        this.storageService.saveLoginData(res.data);
      })
    );
  }
  forgot(data: IForgot): Observable<any> {
    return this._http.post('auth/forgot-password', data);
  }
  changePassword(data: IChangePassword): Observable<ChangePasswordResponse> {
    const token = this.storageService.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this._http.post<ChangePasswordResponse>(
      'auth/change-password',
      data,
      { headers }
    );
  }
}
