import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuildManagerModule } from './guildmanager/guildmanager.module';
import { UserManagerModule } from './usermanager/usermanager.module';
import { UserGraphComponent } from './usermanager/components/usergraph/usergraph.component';
import { UnauthorizedComponent } from './home/unauthorized.component';

const routes: Routes = [
  { path: 'guilds', loadChildren: './guildmanager/guildmanager.module#GuildManagerModule' },
  { path: 'graph/:id', component: UserGraphComponent },
  { path: 'users/:id', loadChildren: './usermanager/usermanager.module#UserManagerModule' },
  { path: '**', redirectTo: 'guilds' },
  { path: 'unauthorized', component: UnauthorizedComponent }
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
