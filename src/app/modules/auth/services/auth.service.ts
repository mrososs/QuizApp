import { ILogin } from './../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorgeService } from '../../../core/services/storge.service';
import { LoginResponse } from '../../../core/models/login-response.model';
import { RegisterParams, RegisterRes } from '../models/register';

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

register(data:RegisterParams):Observable<RegisterRes>{
  return this._http.post<RegisterRes>(`auth/register` , data)
}


}
