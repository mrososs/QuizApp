import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { AddUpdateQuestionComponent } from './components/add-update-question/add-update-question.component';



@NgModule({
  declarations: [
    ListQuestionComponent ,
    AddUpdateQuestionComponent ,

  ],
  imports: [
    CommonModule,
    QuestionRoutingModule ,
     SharedModule ,
    MaterialModule ,
  ] ,
  exports:[
   SharedModule ,
    MaterialModule ,
  ]

})
export class QuestionModule { }
