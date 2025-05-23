import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz , UpdateQuiz } from '../model/quiz';
import { inject, Injectable } from '@angular/core';
import { AllGroups } from '../../groups/model/AllGroups-model';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
 private _http = inject(HttpClient);

  getQuizById(id:string):Observable<Quiz>{
    return this._http.get<Quiz>(`quiz/${id}`)
  }
  updateQuiz(id:string , data:any):Observable<UpdateQuiz>{
    return this._http.put<UpdateQuiz>(`quiz/${id}` , data )
  }
   deleteQuiz(id:string):Observable<UpdateQuiz>{
    return this._http.delete<UpdateQuiz>(`quiz/${id}`)
  }


  getGroups(): Observable<AllGroups[]> {
    return this._http.get<AllGroups[]>('group');
  }
  addQuizz(quizData: Quiz): Observable<Quiz> {
    return this._http.post<Quiz>('quiz', quizData);
  }
}
