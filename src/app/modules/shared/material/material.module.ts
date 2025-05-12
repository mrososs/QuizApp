import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const AllMaterial = [
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatOptionModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, AllMaterial],
  exports: [AllMaterial],
})
export class MaterialModule {}
