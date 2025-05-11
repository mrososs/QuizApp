import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  standalone: false,
  templateUrl: './shared-input.component.html',
  styleUrl: './shared-input.component.scss'
})
export class SharedInputComponent {
  @Input() label: string = 'Label';
  @Input() control!: FormControl;
  @Input() type: 'input' | 'select' = 'input';
  @Input() options: string[] = [];
}
