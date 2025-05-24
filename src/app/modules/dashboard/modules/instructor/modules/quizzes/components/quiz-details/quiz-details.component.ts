import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from '../../model/quiz';
import { FormControl, FormGroup , Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../../../../../../shared/components/delete/delete.component';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AllGroups } from '../../../groups/model/AllGroups-model';
import { categories } from '../../enums/categories.enum';
import { DifficultyLevel } from '../../enums/difficultyLevel.enum';

@Component({
  selector: 'app-quiz-details',
  standalone: false ,
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.scss'
})
export class QuizDetailsComponent {
  quizId :any =''
  QuizDetails !:Quiz
  editMode:boolean =false
   durations = [10, 20, 30, 40, 50, 60];
    difficultyLevels = Object.values(DifficultyLevel);
    categoryList = Object.values(categories);
  
    questions = [3,4,5,10, 15, 20, 25, 30];
    scores = [1, 5, 10];
 private _quizzService = inject(QuizService);
  group = toSignal(this._quizzService.getGroups(), {
    initialValue: [] as AllGroups[],
  });
  QuizForm :FormGroup =new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    questions_number: new FormControl(),
    difficulty: new FormControl(''),
    type: new FormControl(''), 
    group:new FormControl(''),
    // schedule_date: new FormControl(new Date()),
    // schedule_time: new FormControl('12:00'), // Time string (e.g., '14:30')
    duration: new FormControl(''),
    score_per_question: new FormControl(''), // was scorePerQuestion
  });



  constructor(private _QuizService:QuizService ,
    private _ToastrService:ToastrService ,
    private dialog: MatDialog ,
    private _Router:Router ,
    private _ActivatedRoute:ActivatedRoute
  ){
    this.quizId=this._ActivatedRoute.snapshot.paramMap.get('id')


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
  editQuiz(): void {
  this.editMode = true;

  // Disable all fields first for safety
  this.QuizForm.disable();

  // Only enable `duration` and `group`
  this.QuizForm.get('duration')?.enable();
  this.QuizForm.get('group')?.enable();
}
 updateQuiz(): void {
  const duration = this.QuizForm.get('duration')?.value;
  const group = this.QuizForm.get('group')?.value;

  const updatedData = {
    duration: duration,
    group: group,
    schadule: this.QuizDetails.schadule, // preserve original schadule
  };

  this._QuizService.updateQuiz(this.quizId, updatedData).subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.error(err);
      this._ToastrService.error('Error updating quiz');
    },
    complete: () => {
      this.editMode = false;
      this.QuizForm.disable(); // Lock the form again
      this._ToastrService.success('Quiz updated successfully');
    },
  });
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
