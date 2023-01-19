import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:"",component:LayoutComponent,children:[
      {path:'tasks', 
      loadChildren: () => import(`./tasks-admin/tasks-admin-routing.module`).then(m => m.TasksAdminRoutingModule)
      },
      {path:'users', 
      loadChildren: () => import(`./mange-users/mange-users.module`).then(m => m.MangeUsersModule)
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }
