import { Component, OnInit } from '@angular/core';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterData, RegisterParams } from '../../models/register';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedLayoutComponent,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  role: string[] = ['Student', 'instructor'];
  passwordVisible: boolean = false;
  registerForm!: FormGroup;
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private fb: NonNullableFormBuilder,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
        ],
      }),
      last_name: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
        ],
      }),
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
         validators: [
          Validators.required ,
         Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
        ] }),
      role: this.fb.control('', { validators: [Validators.required] }),
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.register(this.registerForm.value);
    }
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      // this.toastr.error('Please fill all the required fields.');
      return;
    }
  }
  register(registerData: any): void {
    this._AuthService.register(registerData).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        // this.toastr.success('Record created successfully');
      },
      error: (err) => {
        this.toastr.error('Something went wrong.');
      },
      complete: () => {
        this._Router.navigate(['/auth/login']);
      },
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}

// registerForm = new FormGroup({
//   first_name:new FormControl('', [Validators.required ]) ,
//   last_name:new FormControl('', [Validators.required ]) ,
//   email:new FormControl('', [Validators.required , Validators.email]) ,
//   password:new FormControl('', [Validators.required ]) ,
//   role:new FormControl('', [Validators.required ]) ,
// })
