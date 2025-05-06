import { Component, OnInit } from '@angular/core';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule,Validators,} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterData, RegisterParams } from '../../models/register';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
   imports: [
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    SharedLayoutComponent ,
    MatSelectModule ,
    MatFormFieldModule ,FormsModule

],
    providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  role: string[] = ['Student' , 'instructor' ]
  passwordVisible:boolean = false

  registerForm = new FormGroup({
    first_name:new FormControl('', [Validators.required ]) ,
    last_name:new FormControl('', [Validators.required ]) ,
    email:new FormControl('', [Validators.required , Validators.email]) ,
    password:new FormControl('', [Validators.required ]) ,
    role:new FormControl('', [Validators.required ]) ,
  })


  constructor(private _AuthService:AuthService ,
     private _Router: Router
  ){}

  onSubmit(): void {
    if(this.registerForm.valid){
      // console.log(this.registerForm.value);
      this.register( this.registerForm.value)
    }
  }
  register( registerData : any ):void{
    this._AuthService.register(registerData).subscribe({
      next:(res)=> {
        console.log(res);
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {
        this._Router.navigate(['/auth/login'])
      },
    })
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
