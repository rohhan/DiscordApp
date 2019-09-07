import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuildManagerModule } from './guildmanager/guildmanager.module';

const routes: Routes = [
  { path: 'guilds', loadChildren: './guildmanager/guildmanager.module#GuildManagerModule' },
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
