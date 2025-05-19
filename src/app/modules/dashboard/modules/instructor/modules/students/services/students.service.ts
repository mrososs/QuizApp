import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../../groups/model/students';
import { AllStudent, StudentGroup } from '../model/AllStudent.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _http: HttpClient) {}

  getAllStudents(): Observable<AllStudent[]> {
    return this._http.get<AllStudent[]>(`student`);
  }

  getAllStudentsWithoutGroups(): Observable<Students[]> {
    return this._http.get<Students[]>(`student/without-group`);
  }

  getAllGroups(): Observable<StudentGroup[]> {
    return this._http.get<StudentGroup[]>(`group`);
  }
  addStudentToGroup(studentId: string, groupId: string): Observable<any> {
    return this._http.get(`student/${studentId}/${groupId}`);
  }

  getStudentById(id: string): Observable<any> {
    return this._http.get<any>(`student/${id}`);
  }

  deleteStudent(id: string): Observable<any> {
    return this._http.delete<any>(`student/${id}`);
  }

  removeStudentFromGroup(groupId: string, studentId: string) {
    return this._http.delete(`student/${studentId}/${groupId}`);
  }

  updateStudentGroup(studentId: string, groupId: string) {
    return this._http.put(`student/${studentId}/${groupId}`, {});
  }
}
