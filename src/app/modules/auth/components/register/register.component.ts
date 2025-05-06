import { Component, OnInit } from '@angular/core';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { CommonModule } from '@angular/common';
import {
  FormGroup, NonNullableFormBuilder, ReactiveFormsModule,Validators,} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { RegisterData, RegisterParams } from '../../models/register';


@Component({
  selector: 'app-register',
  standalone: true,
   imports: [
      MatIconModule,
      CommonModule,
      ReactiveFormsModule,
    ],
    providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  constructor(private _AuthService:AuthService){}

  ngOnInit(): void {}
  
  register( registerData : RegisterParams):void{
    this._AuthService.register(registerData).subscribe({
      next:(res)=> {
        console.log(res);
      },
      error:(err)=> {
        console.log(err);
      },
    })
  }

}
