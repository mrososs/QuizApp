import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private apiUrl = 'https://upskilling-egypt.com:3005/api/group';

  constructor(private http: HttpClient) {}

  createGroup(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); 
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>('https://upskilling-egypt.com:3005/api/student/without-group');
  }

}
