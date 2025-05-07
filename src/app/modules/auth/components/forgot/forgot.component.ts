import { Component } from '@angular/core';
import { SharedLayoutComponent } from '../shared-layout/shared-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IForgot } from '../../models/forgot';
import { ToastrService } from 'ngx-toastr';

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
    private authService: AuthService,
    private router: Router,
    private _Toastr: ToastrService
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
      next: (res) => {
        this._Toastr.success(res.message);
        this.router.navigate(['/auth/forgot/reset']); // Navigate to reset page
      },
      error: (err) => {
        this._Toastr.error(err.message);
      }
    });
  }
  
  
}
