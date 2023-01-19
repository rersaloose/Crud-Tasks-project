import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { TasksService } from '../../services/tasks.service';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import * as moment from "moment"
import {TranslateService} from "@ngx-translate/core";
export interface PeriodicElement {
  title: string;
  user: string;
  deadline: string;
  status: string;
}

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'title',
    'user',
    'deadline',
    'status',
    'actions',
  ];
  dataSource: any = [];
  tasksFilter!: FormGroup;
  users: any = [
    { name: 'eslam', id: '63c4adac16b0c4282e09e4b2' },
    { name: 'mohamed', id: '63c4addbecc935ceb32c5bbb' },
  ];
  
  page=1;
  status: any = [
    { name:this.translat.instant('tasks.complete')},
    { name:'In-Progress'},
  ];
  filteration: any = {
    page:this.page,
    limit:10
  };
  timeOut: any;
  total:any
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private taskservice: TasksService,
    private spinner: NgxSpinnerService,
    private translat:TranslateService
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  createform() {
    this.tasksFilter = this.fb.group({
      title: [''],
      userId: [''],
      fromDate: [''],
      toDate: [''],
    });
  }
  maptask(data: any[]) {
    var newtask = data.map((item) => {
      return {
        ...item,
        user: item.userId.username,
      };
    });
    return newtask;
  }
  getAllTasks() {
    this.spinner.show();
    this.taskservice.getALLtasks(this.filteration).subscribe((res: any) => {
      this.spinner.hide();
this.total=res.totalItems
      this.dataSource = this.maptask(res.tasks);
    });
  }
  addTask() {
    const dialogRef = this.dialog.open(AddTasksComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('resalt' + result);
        this.getAllTasks();
      }
    });
  }
  search(event: any) {
    this.page=1
    this.filteration["page"]=1
    this.filteration['keyword'] = event.value;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.getAllTasks();
    }, 1000);
  }
  selectuser(event: any) {
    this.page=1
    this.filteration["page"]=1
    this.filteration['userId'] = event.value;
    this.getAllTasks();
  }
  selectstatus(event:any){
    this.filteration['status'] = event.value;
    console.log(event)
    this.getAllTasks();
  }
  selectdate(event:any,type:string){
    this.filteration[type]= moment( event.value).format("DD-MM-YYY") 
    if( type=="toDate" ){
      this.getAllTasks()
    }
  }
  updattask(element: any) {
    const dialogRef = this.dialog.open(AddTasksComponent, {
      data: element,
    });
  }
  deletetask(id: any) {
    this.spinner.show();
    this.taskservice.deleteTask(id).subscribe((res) => {
      this.getAllTasks();
      this.spinner.hide();
    });
  }
  changepage(event:any){
this.page=event
this.filteration["page"]=event
this.getAllTasks()
  }
}
