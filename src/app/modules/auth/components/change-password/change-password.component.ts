import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  passwordVisible = false;
  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService   
  ) {
    this.changePasswordForm = this.fb.group({
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
      password_new: this.fb.control('', {
        validators: [Validators.required],
      }),
      password_confirm: this.fb.control('', {
        validators: [Validators.required],
      }),
    } , { validators: ChangePasswordComponent.passwordMatchValidator });
  }
  static passwordMatchValidator(form: AbstractControl) {
    const newPassword = form.get('password_new')?.value;
    const confirmNewPassword = form.get('password_confirm')?.value;
    return newPassword === confirmNewPassword ? null : { mismatch: true };
  }
  
  ngOnInit(): void {}
  onSubmit() {
    if (this.changePasswordForm.valid) {
      this.authService.changePassword(this.changePasswordForm.value).subscribe();
    }
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
