import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllGroups } from '../../groups/model/AllGroups-model';
import { Quiz } from '../models/quizz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _http = inject(HttpClient);
  getGroups(): Observable<AllGroups[]> {
    return this._http.get<AllGroups[]>('group');
  }
  addQuizz(quizData: Quiz): Observable<Quiz> {
    return this._http.post<Quiz>('quiz', quizData);
  }
}
