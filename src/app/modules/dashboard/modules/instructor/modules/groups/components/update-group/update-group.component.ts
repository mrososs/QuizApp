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
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrl: './update-group.component.scss'
})
export class UpdateGroupComponent implements OnInit  {

  readonly dialogRef = inject(MatDialogRef<UpdateGroupComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  GroupService = inject( GroupService)
  ToastrService = inject(ToastrService)
  groupID = this.data.groupID
  groupName :string =''
  studentsID :string[] =[]                // students in this group
  studentsDetails :Students[]=[]         // students in this group
  StudentsWithoutGroups :Students[]=[]
  allStudentInSelectMat  :Students[]=[]  // students in this group + studentsWithoutGroups


  ngOnInit() {
   this.getGroupById()
   this.getAllStudentsWithoutGroups()
   console.log(this.allStudentInSelectMat);
   }


  getGroupById():void{
    this.GroupService.getGroupById(this.groupID).subscribe({
      next: (res) => {
        this.groupName=res.name
        this.studentsDetails = res.students
        for (let i = 0; i < res.students.length; i++) {
          this.studentsID.push(res.students[i]._id);
        }
       this.allStudentInSelectMat.push(...this.studentsDetails )
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAllStudentsWithoutGroups():void{
    this.GroupService.getAllStudentsWithoutGroups().subscribe({
      next: (res) => {
       this.StudentsWithoutGroups =res
       this.allStudentInSelectMat.push(...this.StudentsWithoutGroups )
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  update():void{
   let updateParams:updateParams ={ name: this.groupName, students: this.studentsID }
    this.GroupService.updateGroup(this.groupID , updateParams).subscribe({
      next: (res) => {
       this.groupName = res.name
       this.studentsDetails = res.students
        for (let i = 0; i < res.students?.length ; i++) {
          this.studentsID.push(res.students[i]._id);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete:() =>{
        this.ToastrService.success(this.groupName , 'Updated Successfully')
        this.getAllStudentsWithoutGroups()
         this.dialogRef.close();
      },
    });


  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

