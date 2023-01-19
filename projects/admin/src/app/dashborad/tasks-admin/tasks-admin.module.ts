import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListTasksComponent,
    AddTasksComponent,
  ],
  imports: [
    CommonModule,
    TasksAdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule
  ],
  exports:[
    ListTasksComponent,
    AddTasksComponent
  ]
})
export class TasksAdminModule { }
