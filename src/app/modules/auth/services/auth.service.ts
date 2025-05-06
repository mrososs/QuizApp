import { ILogin } from './../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../../../core/services/storage.service';
import { LoginResponse } from '../../../core/models/login-response.model';
import { ChangePasswordResponse, IChangePassword } from '../../../core/models/change-pass.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _http:HttpClient,private storageService:StorageService) { }

login(data:ILogin):Observable<LoginResponse>{
  return this._http.post<LoginResponse>('auth/login',data).pipe(
    tap((res:LoginResponse)=>{
      
      this.storageService.saveLoginData(res.data);
    })
  )
}
changePassword(data: IChangePassword): Observable<ChangePasswordResponse> {
  return this._http.post<ChangePasswordResponse>('auth/change-password', data);
}


}
