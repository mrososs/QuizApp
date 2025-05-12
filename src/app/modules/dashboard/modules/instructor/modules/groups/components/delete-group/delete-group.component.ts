import { Component, inject,  OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { GroupService } from '../../services/group.service';
import { Students } from '../../model/students';
import { updateParams } from '../../model/updateGroup-model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrl: './delete-group.component.scss'
})
export class DeleteGroupComponent {
   readonly dialogRef = inject(MatDialogRef<DeleteGroupComponent>);
    readonly data = inject(MAT_DIALOG_DATA);
    GroupService = inject( GroupService)
    ToastrService = inject(ToastrService)
    groupID = this.data.groupID
    groupName :string =''



    deleteGroup():void{
      this.GroupService.deleteGroup(this.groupID ).subscribe({
      next: (res) => {
       console.log(res);
       this.groupName = res.data.name
      },
      error: (err) => {
        console.log(err);
      },
      complete:() =>{
        this.ToastrService.success(this.groupName , 'Deleted Successfully')

         this.dialogRef.close();
      },
    });

    }


     onNoClick(): void {
    this.dialogRef.close();
  }

}
