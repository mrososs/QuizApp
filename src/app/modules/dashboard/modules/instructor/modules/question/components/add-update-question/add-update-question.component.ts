import { Component,  inject,  OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../model/question-model';
import { FormControl, FormGroup , Validator, Validators } from '@angular/forms';

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
  QuestionData !: Question
  optionsKeys  :string[]=[]
  categoryType :string[]=['FE' , 'BE']
  DifficultyLevel :string[]=[ 'easy','medium' ,'hard' ]

  QuestionForm :FormGroup = new FormGroup({
  title:new FormControl('' ),
  description:new FormControl('' ),
  options :new FormGroup({
  A: new FormControl('' , [Validators.required ] ),
  B:  new FormControl('' , [Validators.required ] ),
  C:  new FormControl('' , [Validators.required ] ),
  D:  new FormControl('' , [Validators.required ] ),
  }) ,
  difficulty :new FormControl('' , [Validators.required ] ),
  answer:new FormControl('' , [Validators.required ] ),
  type: new FormControl('' , [Validators.required ] ),
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

 onNoClick(): void {
    this.dialogRef.close();
  }
}
