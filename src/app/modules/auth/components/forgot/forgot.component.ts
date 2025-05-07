import { Component } from '@angular/core';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IForgot } from '../../models/forgot';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [
    SharedLayoutComponent,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {
  forgotForm!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService
  ) {
    this.forgotForm = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  sendForgot() {
    if (this.forgotForm.invalid) return;

    const data: IForgot = {
      email: this.forgotForm.get('email')?.value
    };

    this.authService.forgot(data).subscribe({
      next: (res) => console.log('تم الإرسال:', res),
      error: (err) => console.error('فيه مشكلة:', err)
    });
  }
}
