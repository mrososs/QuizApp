import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllGroups } from '../model/AllGroups-model';
import { UpdateGroupRes , GroupData } from '../model/updateGrop-model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor( private _http: HttpClient) {}

  allGroups():Observable<AllGroups[]>{
    return this._http.get<AllGroups[]>(`group`)
  }
  getGroupById(groupID:string):Observable<GroupData>{
    return this._http.get<GroupData>(`group${groupID}`)
  }

  updateGroup(groupID:string ,data:any ):Observable<GroupData>{
    return this._http.put<GroupData>(`group${groupID}` , data)
  }
  

}
