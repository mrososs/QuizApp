import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [
    SharedLayoutComponent,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private router: Router 
  ) {
    this.resetForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      otp: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.resetForm.valid) {
      this.authService.resetPassword(this.resetForm.value).subscribe({
        next: (res) => {
          console.log('Reset successful', res);
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error('Reset error', err);
        }
      });
    }
  }
  

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
