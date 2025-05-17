import { Component, Inject, inject,  OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../model/question-model';
import { FormControl, FormGroup , Validator } from '@angular/forms';

@Component({
  selector: 'app-add-update-question',
  standalone: false,
  templateUrl: './add-update-question.component.html',
  styleUrl: './add-update-question.component.scss'
})
export class AddUpdateQuestionComponent implements OnInit {
  constructor(private QuestionService:QuestionService ,
    private ToastrService:ToastrService ,
   ){}

  readonly dialogRef = inject(MatDialogRef<AddUpdateQuestionComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  QuestionID = this.data.QuestionID
  status = this.data.status
  editMode : boolean =false
  viewMode : boolean =false
  addMode : boolean =false
  deleteMode: boolean =false
  QuestionData !: Question
  optionsKeys  :string[]=[]
  categoryType :string[]=['FE' , 'BE']
  DifficultyLevel :string[]=[ 'easy','medium' ,'entry' ,'hard' ]

  QuestionForm :FormGroup = new FormGroup({
  title:new FormControl('' ),
  description:new FormControl('' ),
  options :new FormGroup({
  A: new FormControl('' ),
  B:  new FormControl('' ),
  C:  new FormControl('' ),
  D:  new FormControl('' ),
  }) ,
  difficulty :new FormControl('' ),
  answer:new FormControl('' ),
  type: new FormControl('' ),
  })

  ngOnInit(): void {
    this.getQuestionByID()
    this.optionsKeys = Object.keys((this.QuestionForm.get('options') as FormGroup).controls);

    if(this.status === 'edit'){
      this.editMode =true
      this.view()
    }
   if(this.status === 'view'){
      this.viewMode =true
      this.QuestionForm.disable()
    }
    if(this.status === 'delete'){
      this.deleteMode =true
    }
    else{
      this.addMode=true
    }

  }


  onSubmit():void{
    if(this.editMode){
      this.update()
    }
    else{
      this.addQuestion()
    }

  }
  getQuestionByID():void{
    this.QuestionService.getQuestionByID(this.QuestionID).subscribe({
        next:(res)=> {
        console.log(res);
        this.QuestionData = res
        this.view()
      },
      error:(err)=>{
          console.log(err);
      },
    })
  }
  addQuestion():void{
    let createParams = this.QuestionForm.value
    this.QuestionService.createQuestion( createParams ).subscribe({
        next:(res)=> {
        console.log(res);
         this.ToastrService.success( res.message)
      },
      error:(err)=>{
          console.log(err);
      },
      complete:()=>{
        this.ToastrService.success('Question Added Successfully')
        this.onNoClick()
      },

    })
  }
  update():void{
    let updateParam = this.QuestionForm.value
    this.QuestionService.updateQuestion(this.QuestionID , updateParam ).subscribe({
        next:(res)=> {
         this.ToastrService.success( res.message)
      },
      error:(err)=>{
          console.log(err);
      },
      complete:()=>{
        this.ToastrService.success('Question Updated Successfully')
        this.onNoClick()
      },

    })
  }
 view():void{
   this.QuestionForm.patchValue(this.QuestionData)
 }

 delete():void{
   this.QuestionService.deleteQuestion(this.QuestionID ).subscribe({
        next:(res)=> {
        console.log(res);
         this.ToastrService.success( res.message)
      },
      error:(err)=>{
          console.log(err);
      },
      complete:()=>{
        this.ToastrService.success('Question deleted Successfully')
        this.onNoClick()
      },

    })

 }
 onNoClick(): void {
    this.dialogRef.close();
  }
}
