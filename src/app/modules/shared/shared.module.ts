import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatIconModule,
     CommonModule ,
    RouterModule ,
    MaterialModule ,
    MatIconModule
  ],
  exports: [CommonModule, MatButtonModule, MatIconModule , MaterialModule ,RouterModule , MatIconModule],
})
export class SharedModule {}
