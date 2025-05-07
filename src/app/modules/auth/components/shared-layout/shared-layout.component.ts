import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared-layout',
  standalone: true,
  imports: [CommonModule, ToastContainerDirective],
  templateUrl: './shared-layout.component.html',
  styleUrl: './shared-layout.component.scss',
})
export class SharedLayoutComponent  {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer!: ToastContainerDirective;
  constructor(private toastr: ToastrService) {}
  ngAfterViewInit() {
    
    this.toastr.overlayContainer = this.toastContainer;
  }
}
