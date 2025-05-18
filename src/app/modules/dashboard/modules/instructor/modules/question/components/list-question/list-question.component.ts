import { Component, inject } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../model/question-model';
import { PaginatorComponent } from '../../../../../../../shared/components/paginator/paginator.component';
import { AddUpdateQuestionComponent } from '../add-update-question/add-update-question.component';

import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

AddUpdateQuestionComponent
@Component({
  selector: 'app-list-question',
  standalone: false,
  templateUrl: './list-question.component.html',
  styleUrl: './list-question.component.scss'
})
export class ListQuestionComponent {
  allQuestion : Question[] =[]
  paginatedData :  Question[] = [];
   pageIndex:number  = 0;
   pageSize:number  = 7 ;


   constructor(private _QuestionService:QuestionService ,
     private dialog: MatDialog){
    this.getAllQuestions()
   }

   getAllQuestions():void{
    this._QuestionService.getAllQuestions().subscribe({
      next:(res)=> {
        this.allQuestion = res
        this. updatePaginatedData()
      },
      error:(err)=>{
          console.log(err);
      },

    })
   }

     openDialog(QuestionID :string , status:string): void {

       const dialogRef = this.dialog.open(AddUpdateQuestionComponent ,
         { data: {QuestionID : QuestionID , status : status} ,
         width: 'auto',
        maxWidth: 'none',
        panelClass: 'custom-dialog-container'

        }
      );

        dialogRef.afterClosed().subscribe(result => {
         this.getAllQuestions()
         if (result !== undefined) {
         }
       });

     }



    //  paginator
  updatePaginatedData() {
  const start = this.pageIndex * this.pageSize;
  const end = start + this.pageSize;
  this.paginatedData = this.allQuestion.slice(start, end);
}
onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
  this.updatePaginatedData();
}


}
