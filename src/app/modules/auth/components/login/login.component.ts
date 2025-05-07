import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedLayoutComponent,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible = false;
  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;

    }
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.toastr.success('Login successful', 'Success!');
        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Error!');
        },
      });
    }
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
 
}
