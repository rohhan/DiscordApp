import { NgModule } from '@angular/core';

import { GuildsComponent } from '../guilds/guilds.component';
import { MaterialModule } from '../shared/material.module';
import { GuildManagerAppComponent } from './guildmanagerapp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/maincontent/maincontent.component';

@NgModule({
  declarations: [
    GuildManagerAppComponent,
    GuildsComponent,
    MainContentComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [

  ]
})
export class GuildManagerModule {}
