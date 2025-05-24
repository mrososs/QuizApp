import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.scss',
})
export class LogoutDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { code: string },
    private dialogRef: MatDialogRef<LogoutDialogComponent>
  ) {}
   
  onCancel(): void {
    this.dialogRef.close();
  }
  onLogout():void{
    localStorage.clear();
    window.location.reload();
    this.dialogRef.close();
  }
}
