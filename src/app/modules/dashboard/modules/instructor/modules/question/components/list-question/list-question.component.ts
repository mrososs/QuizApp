import { Component, inject } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../model/question-model';
import { PaginatorComponent } from '../../../../../../../shared/components/paginator/paginator.component';
import { AddUpdateQuestionComponent } from '../add-update-question/add-update-question.component';
import { ToastrService } from 'ngx-toastr';


import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from '../../../../../../../shared/components/delete/delete.component';

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
     private dialog: MatDialog ,
    private ToastrService:ToastrService){
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
  deleteQuestion(questionID:string):void{
    this._QuestionService.deleteQuestion(questionID).subscribe({
        next:(res)=> {
        console.log(res);
         this.ToastrService.success( res.message)
      },
      error:(err)=>{
          console.log(err);
      },
      complete:()=>{
        this.ToastrService.success('Question deleted Successfully')
        // this.onNoClick()
      },

    })

 }

 openDeleteDialog(id :string ) {
   const dialogRef = this.dialog.open(DeleteComponent, {
     data: {
      id : id ,
      deleteAction: this.deleteQuestion.bind(this),
     },
   });
  dialogRef.afterClosed().subscribe(result => {
         this.getAllQuestions()
  });



}

 openAddUpdateDialog(QuestionID :string , status:string): void {
       const dialogRef = this.dialog.open(AddUpdateQuestionComponent ,
         { data: {QuestionID : QuestionID , status : status} ,
         width: 'auto',
        }
      );
       dialogRef.afterClosed().subscribe(result => {
         this.getAllQuestions()
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
