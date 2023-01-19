import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { DetailsTaskComponent } from './components/details-task/details-task.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListTasksComponent,
    DetailsTaskComponent,
  
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class TasksModule { }
