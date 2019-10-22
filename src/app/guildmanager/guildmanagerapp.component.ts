import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guildmanagerapp',
  templateUrl: './guildmanagerapp.component.html',
  styleUrls: ['./guildmanagerapp.component.scss']
})
export class GuildManagerAppComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router) {}

  ngOnInit() {
    if (window.location.href.indexOf('?postLogout=true') > 0) {
      this._authService.signoutRedirectCallback().then(() => {
        const url: string = this._router.url.substring(
          0,
          this._router.url.indexOf('?')
        );
        this._router.navigateByUrl(url);
      });
    }
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }
}
