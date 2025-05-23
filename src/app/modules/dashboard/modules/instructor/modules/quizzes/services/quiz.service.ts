import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz , UpdateQuiz } from '../model/quiz';
Observable


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  getQuizById(id:string):Observable<Quiz>{
    return this.http.get<Quiz>(`quiz/${id}`)
  }
  updateQuiz(id:string , data:any):Observable<UpdateQuiz>{
    return this.http.put<UpdateQuiz>(`quiz/${id}` , data )
  }
   deleteQuiz(id:string):Observable<UpdateQuiz>{
    return this.http.delete<UpdateQuiz>(`quiz/${id}`)
  }


}
