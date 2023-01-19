import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TasksAdminModule } from './tasks-admin/tasks-admin.module';
import { MangeUsersModule } from './mange-users/mange-users.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    TasksAdminModule,
    MangeUsersModule,SharedModule,
  ],
  exports:[
    LayoutComponent
  ]
})
export class DashboradModule { }
