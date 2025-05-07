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
import { Router, RouterModule } from '@angular/router';
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
    private toastr: ToastrService,
    private router: Router
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
  ngOnInit(): void {}
  onSubmit():void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      
    } else {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          // Save tokens and profile

          this.toastr.success('Login successful', 'Success!');

          const role = this.authService.getUserRole(); // get from storage
          console.log(role);
          if (role === 'Instructor') {
            this.router.navigate(['/dashboard/instructor']);
          } else if (role === 'Student') {
            this.router.navigate(['/dashboard/learner']);
          } else {
            this.toastr.error('Unauthorized role');
          }
        },
        error: (err) => {
          this.toastr.error(err.error.message || 'Login failed', 'Error!');
        },
      });
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
