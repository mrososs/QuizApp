import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../../../core/services/spinner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  private _spinnerService = inject(SpinnerService);
  loading$ = this._spinnerService.loading$;
}
