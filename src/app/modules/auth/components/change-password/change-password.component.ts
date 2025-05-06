import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    SharedLayoutComponent
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  oldPasswordVisible = false;
  newPasswordVisible = false;
  confirmPasswordVisible = false;
  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
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
      const formValue = { ...this.changePasswordForm.value };
      delete formValue.password_confirm;
  
      this.authService.changePassword(formValue).subscribe({
        next: (res) =>{ 
          console.log(res);
          this.toastr.success('change password successfully');
        },
        error: (err) => {
          console.error('Error response:', err);
          this.toastr.error(err.message || 'Something went wrong.')
        },
        complete: () => {
          this.router.navigate(['/auth']);
        }
      });    
    }
  }
  
  toggleOldPasswordVisibility() {
    this.oldPasswordVisible = !this.oldPasswordVisible;
  }
  toggleNewPasswordVisibility() {
    this.newPasswordVisible = !this.newPasswordVisible;
  }
  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
}
