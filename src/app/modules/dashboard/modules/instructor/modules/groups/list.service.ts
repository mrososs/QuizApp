import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllGroups } from './model/AllGroups-model';


@Injectable({
  providedIn: 'root'
})
export class ListService {

    constructor( private _http: HttpClient) {}

    allGroups():Observable<AllGroups[]>{
      return this._http.get<AllGroups[]>(`group`)
    }

}
