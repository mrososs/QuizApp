import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUpcomingQuizzes } from '../models/upcoming-5-quizzes.model';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private _httpClient = inject(HttpClient);
  getUpcomingQuizzes(): Observable<IUpcomingQuizzes> {
    return this._httpClient.get<IUpcomingQuizzes>('quiz/incomming');
  }
}
