import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../../groups/model/students';
import { AllStudent } from '../model/AllStudent.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private _http: HttpClient) {}

  getAllStudents(): Observable<AllStudent[]> {
    return this._http.get<AllStudent[]>(`student`);
  }

  getAllStudentsWithoutGroups(): Observable<Students[]> {
    return this._http.get<Students[]>(`student/without-group`);
  }

  getAllGroups(): Observable<AllStudent[]> {
    return this._http.get<AllStudent[]>(`group`);
  }
}
