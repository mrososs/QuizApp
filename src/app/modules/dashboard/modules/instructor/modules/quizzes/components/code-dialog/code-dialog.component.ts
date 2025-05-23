import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-code-dialog',
  templateUrl: './code-dialog.component.html',
  styleUrl: './code-dialog.component.scss',
})
export class CodeDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { code: string },
    private dialogRef: MatDialogRef<CodeDialogComponent>
  ) {}

 
  onCancel(): void {
    this.dialogRef.close();
  }
  copyCode(): void {
    navigator.clipboard.writeText(this.data.code).then(() => {
      alert('Code copied to clipboard!');
    });
  }

}
