import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shared-inputs',
  templateUrl: './shared-inputs.component.html',
  styleUrls: ['./shared-inputs.component.scss']
})
export class SharedInputsComponent {
  @Input() label: string = 'Label';
  @Input() control!: FormControl;
  @Input() type: 'input' | 'select' = 'input';
  @Input() options: { label: string; value: any }[] = [];
}
