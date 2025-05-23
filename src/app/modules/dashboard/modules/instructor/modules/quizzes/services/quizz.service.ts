import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUpcomingQuizzes } from '../../dashboard/models/upcoming-5-quizzes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private _httpClient: HttpClient) { }


    getUpcomingQuizzes(): Observable<IUpcomingQuizzes[]> {
      return this._httpClient.get<IUpcomingQuizzes[]>('quiz/incomming');
    }
    getCompletedQuizzes(): Observable<any> {
      return this._httpClient.get<any>('quiz/completed');
    }
}

