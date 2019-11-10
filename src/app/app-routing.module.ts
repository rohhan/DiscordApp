import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuildManagerModule } from './guildmanager/guildmanager.module';
import { UserManagerModule } from './usermanager/usermanager.module';
import { UserGraphComponent } from './usermanager/components/usergraph/usergraph.component';
import { SigninRedirectCallbackComponent } from './home/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './home/signout-redirect-callback.component';
import { UnauthorizedComponent } from './home/unauthorized.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guilds', loadChildren: './guildmanager/guildmanager.module#GuildManagerModule' },
  { path: 'graph/:id', component: UserGraphComponent },
  { path: 'users/:id', loadChildren: './usermanager/usermanager.module#UserManagerModule' },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
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
