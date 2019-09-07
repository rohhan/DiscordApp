import { NgModule } from '@angular/core';

import { GuildsComponent } from '../guilds/guilds.component';
import { MaterialModule } from '../shared/material.module';
import { GuildManagerAppComponent } from './guildmanagerapp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/maincontent/maincontent.component';
import { RouterModule, Routes } from '@angular/router';
import { GuildTableComponent } from './components/guildtable/guildtable.component';

const routes: Routes = [
  { path: 'guilds', component: GuildManagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ] }
];

@NgModule({
  declarations: [
    GuildManagerAppComponent,
    GuildsComponent,
    GuildTableComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [

  ]
})
export class GuildManagerModule {}
