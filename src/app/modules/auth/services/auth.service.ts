import { ILogin } from './../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorgeService } from '../../../core/services/storge.service';
import { LoginResponse } from '../../../core/models/login-response.model';
import { IForgot } from '../models/forgot';
import { IReset } from '../models/reset';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _http:HttpClient,private storgeService:StorgeService) { }

login(data:ILogin):Observable<LoginResponse>{
  return this._http.post<LoginResponse>('auth/login',data).pipe(
    tap((res:LoginResponse)=>{
      
      this.storgeService.saveLoginData(res.data);
    })
  )
}
forgot(data: IForgot): Observable<any> {
  return this._http.post('auth/forgot-password', data);
}

resetPassword(data: IReset): Observable<any> {
  return this._http.post('auth/reset-password', data);    
}
}
