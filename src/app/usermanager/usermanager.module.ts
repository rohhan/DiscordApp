import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { UserManagerAppComponent } from './usermanagerapp.component';
import { UserTableComponent } from './components/usertable/usertable.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UserManagerAppComponent }
];

@NgModule({
  declarations: [
    UserManagerAppComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: []
})
export class UserManagerModule {}
