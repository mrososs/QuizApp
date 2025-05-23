import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedQuizResponse } from '../models/quiz-result.model';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private _http = inject(HttpClient);
  getResult(): Observable<ClosedQuizResponse[]> {
    return this._http.get<ClosedQuizResponse[]>('quiz/result');
  }
}
