
import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog,  } from '@angular/material/dialog';
import { NgxSpinnerService,  } from 'ngx-spinner';
import { TasksService } from '../../services/tasks.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
})
export class AddTasksComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddTasksComponent>,
    public matDialog: MatDialog,
    private taskservice: TasksService,private spinner:NgxSpinnerService  ) {}
  newtaskform!: FormGroup;
  fileImage = '';
  users: any = [
    { name: 'eslam', id: "63c4adac16b0c4282e09e4b2" },
    { name: 'mohamed', id: "63c4addbecc935ceb32c5bbb"},

  ];
  ngOnInit(): void {
    this.createform();
  }

  createform() {
    this.newtaskform = this.fb.group({
      title: [this.data?.title||  ''],
      userId: [this.data?.userId._id||''],
      image: [this.data?.image ||'' ],
      description: [this.data?.description||''],
      deadline: [ this.data?new Date(this.data?.deadline.split("-").reverse().join("-")).toISOString():''],
    });
  }
  selectimage(event: any) {
    this.fileImage = event.target.value;
    this.newtaskform.get('image')?.setValue(event.target.files[0]);
  }
  updatetask(){
    this.spinner.show()
    var form = new FormData();
    form.append('title', this.newtaskform.value['title']);
    form.append('userId', this.newtaskform.value['userId']);
    form.append('image', this.newtaskform.value['image']);
    form.append('description', this.newtaskform.value['description']);
    form.append('deadline', this.newtaskform.value['deadline']);
    this.taskservice.Updatetask(form, this.data._id).subscribe((res) => {
      this.spinner.hide()
      this.dialog.close(true)
    });
  }
  createtask() {
    this.spinner.show()
    var form = new FormData();
    form.append('title', this.newtaskform.value['title']);
    form.append('userId', this.newtaskform.value['userId']);
    form.append('image', this.newtaskform.value['image']);
    form.append('description', this.newtaskform.value['description']);
    form.append('deadline', this.newtaskform.value['deadline']);
    this.taskservice.creattask(form).subscribe((res) => {
      this.spinner.hide()
      this.dialog.close(true)
    });
  }
}
