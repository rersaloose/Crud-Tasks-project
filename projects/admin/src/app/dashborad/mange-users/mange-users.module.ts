import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangeUsersRoutingModule } from './mange-users-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MangeUsersRoutingModule,SharedModule
  ]
})
export class MangeUsersModule { }
