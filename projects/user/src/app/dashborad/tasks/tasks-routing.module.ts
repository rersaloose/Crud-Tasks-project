import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTaskComponent } from './components/details-task/details-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';

const routes: Routes = [
  {
    path:'',
    component:ListTasksComponent
  },
  {
    path:':id', 
    component:DetailsTaskComponent
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
