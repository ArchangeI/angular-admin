import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    SettingsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
