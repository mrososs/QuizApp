import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from '../../model/quiz';
import { FormControl, FormGroup , Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../../../../../../shared/components/delete/delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  standalone: false ,
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.scss'
})
export class QuizDetailsComponent {
  quizId = '682f31fef2d321d7ea62b0d4'
  QuizDetails !:Quiz
  editMode:boolean =false

  QuizForm :FormGroup = new FormGroup({
  // title:new FormControl('' ),
  description:new FormControl('' ),
  questions_number :new FormControl('' , [Validators.required ] ),
  score_per_question :new FormControl('' , [Validators.required ] ),
  duration:new FormControl('' , [Validators.required ] ),
  type:new FormControl('' , [Validators.required ] ),
  // schadule: new FormControl('' , [Validators.required ] ),
  })
  constructor(private _QuizService:QuizService ,
    private _ToastrService:ToastrService ,
    private dialog: MatDialog ,
    private _Router:Router
  ){
    this.getQuizById()
  }


  getQuizById():void{
    this._QuizService.getQuizById(this.quizId).subscribe({
      next :(res) =>{
        console.log(res);
        this.QuizDetails =res
        this.QuizForm.patchValue(res)
        this.QuizForm.disable()
      },
      error:(err) => {
        console.log(err);
      },
    })

  }
  editQuiz():void{
      this.editMode =true
      this.QuizForm.enable()
  }
  updateQuiz():void{
    // let updatedData = this.QuizForm.value
     let updatedData   =
     {questions_number:6 ,  title:"Quiz A1" ,
     schadule: "2025-05-25T21:19:34.000Z" ,
          score_per_question:5 ,type:"BE"}

    this._QuizService.updateQuiz(this.quizId , updatedData).subscribe({
      next :(res) =>{
        console.log(res);
      },
      error:(err) => {
        console.log(err);
        this._ToastrService.error('Error in update quiz')
      },
      complete:() =>  {
        this.editMode =false
        this._ToastrService.success('Quiz updated successfully')


      },
    })
  }

    deleteQuiz():void{
    this._QuizService.deleteQuiz(this.quizId ).subscribe({
      next :(res) =>{
        console.log(res);
      },
      error:(err) => {
        console.log(err);
        this._ToastrService.error('Error in delete quiz')
      },
      complete:() =>  {
        this._ToastrService.success('Quiz deleted successfully')
        this._Router.navigate(['/instructor/quizzes/dashboard'])
      },
    })
  }

  openDeleteDialog(id :string ){
      const dialogRef = this.dialog.open(DeleteComponent, {
     data: {
      id : id ,
      deleteAction: this.deleteQuiz.bind(this),
     },
   });
  dialogRef.afterClosed().subscribe(result => {

  });


  }



}
