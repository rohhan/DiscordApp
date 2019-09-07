import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuildManagerAppComponent } from './guildmanager/guildmanagerapp.component';
import { GuildManagerModule } from './guildmanager/guildmanager.module';

const routes: Routes = [
  { path: 'guilds', component: GuildManagerAppComponent },
  { path: '**', redirectTo: 'guilds' }
];

@NgModule({
  imports: [
    GuildManagerModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
