import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllGroups } from '../model/AllGroups-model';
import { UpdateGroupRes, GroupData,} from '../model/updateGroup-model';
import { Students } from '../model/students';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor( private _http: HttpClient) {}

  getAllGroups():Observable<AllGroups[]>{
    return this._http.get<AllGroups[]>(`group`)
  }

  createGroup(data: any): Observable<any> {
    return this._http.post(`group`, data); 
  }
  getAllStudentsWithoutGroups():Observable<Students[]>{
    return this._http.get<Students[]>(`student/without-group`)
  }
  getGroupById(groupID:string):Observable<GroupData>{
    return this._http.get<GroupData>(`group/${groupID}`)
  }

  updateGroup(groupID:string ,data:any ):Observable<GroupData>{
    return this._http.put<GroupData>(`group/${groupID}` , data)
  }


}
