import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { SharedInputComponent } from '../dashboard/components/shared/shared-input/shared-input.component';

@NgModule({
  declarations: [
    SharedInputComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [CommonModule, MatButtonModule, MatIconModule,SharedInputComponent],
})
export class SharedModule {}
