import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';


@NgModule({
  declarations: [
    
  
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
