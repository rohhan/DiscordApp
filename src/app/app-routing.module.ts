import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuildManagerModule } from './guildmanager/guildmanager.module';
import { UserManagerModule } from './usermanager/usermanager.module';

const routes: Routes = [
  { path: 'guilds', loadChildren: './guildmanager/guildmanager.module#GuildManagerModule' },
  { path: 'users/:id', loadChildren: './usermanager/usermanager.module#UserManagerModule' },
  { path: '**', redirectTo: 'guilds' }
];

@NgModule({
  imports: [
    GuildManagerModule,
    UserManagerModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
