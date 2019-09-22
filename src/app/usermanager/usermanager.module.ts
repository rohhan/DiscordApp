import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from '../shared/material.module';
import { UserManagerAppComponent } from './usermanagerapp.component';
import { UserTableComponent } from './components/usertable/usertable.component';
import { Routes, RouterModule } from '@angular/router';
import { UserGraphComponent } from './components/usergraph/usergraph.component';

const routes: Routes = [
  { path: 'users/:id', component: UserManagerAppComponent },
  { path: 'graph', component: UserGraphComponent },
];

@NgModule({
  declarations: [
    UserManagerAppComponent,
    UserGraphComponent,
    UserTableComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: []
})
export class UserManagerModule {}
