import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, UpdateQuestion } from '../model/question-model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private _http: HttpClient) {}


   getAllQuestions():Observable<Question[]>{
      return this._http.get<Question[]>(`question`)
    }

  getQuestionByID(id:string):Observable<Question>{
      return this._http.get<Question>(`question/${id}`)
   }
   createQuestion(data:Question):Observable<UpdateQuestion>{
      return this._http.post<UpdateQuestion>(`question` , data)
    }
   updateQuestion(id:string , data:Question):Observable<UpdateQuestion>{
      return this._http.put<UpdateQuestion>(`question/${id}` , data)
   }

   deleteQuestion(id:string):Observable<UpdateQuestion>{
      return this._http.delete<UpdateQuestion>(`question/${id}`)
    }


}
