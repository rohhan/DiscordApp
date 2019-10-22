import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IGuild } from '../models/guild';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  private guildUrl = `${Constants.apiRoot}guilds`;

  constructor(private http: HttpClient) { }

  GetGuilds(): Observable<IGuild[]> {
    const guilds = this.http.get<IGuild[]>(this.guildUrl);
    return guilds;
  }
}
