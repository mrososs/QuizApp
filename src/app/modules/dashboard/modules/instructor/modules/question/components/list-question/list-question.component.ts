import { Component, inject } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../model/question-model';
import { PaginatorComponent } from '../../../../../../../shared/components/paginator/paginator.component';
import { AddUpdateQuestionComponent } from '../add-update-question/add-update-question.component';

import { MatDialog } from '@angular/material/dialog';

AddUpdateQuestionComponent
@Component({
  selector: 'app-list-question',
  standalone: false,
  templateUrl: './list-question.component.html',
  styleUrl: './list-question.component.scss'
})
export class ListQuestionComponent {
  allQuestion : Question[] =[]
   length :number =0
   constructor(private _QuestionService:QuestionService ,
     private dialog: MatDialog){
    this.getAllQuestions()
   }

   getAllQuestions():void{
    this._QuestionService.getAllQuestions().subscribe({
      next:(res)=> {
        this.allQuestion = res
        this.length=this.allQuestion.length
      },
      error:(err)=>{
          console.log(err);
      },

    })
   }

     openDialog(QuestionID :string , status:string): void {

       const dialogRef = this.dialog.open(AddUpdateQuestionComponent ,
         { data: {QuestionID : QuestionID , status : status} }
      );

        dialogRef.afterClosed().subscribe(result => {
         this.getAllQuestions()
         if (result !== undefined) {
         }
       });

     }




}
