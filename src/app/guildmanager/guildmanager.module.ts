import { NgModule } from '@angular/core';

import { GuildsComponent } from '../guilds/guilds.component';
import { MaterialModule } from '../shared/material.module';
import { GuildManagerAppComponent } from './guildmanagerapp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GuildManagerAppComponent,
    GuildsComponent
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
