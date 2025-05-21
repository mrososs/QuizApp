import { Component, Inject, inject,  OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  id :string = this.data.id
  deleteAction():void{
    this.data.deleteAction(this.id )
     this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}

// data: { id: string, deleteAction: (id: string) => void },
// send 1-id 2-delete method as data in open dialog
// id ..to pass it to  delete method
