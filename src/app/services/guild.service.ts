import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IGuild } from '../models/guild';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  private guildUrl = 'https://localhost:44399/api/guilds';

  constructor(private http: HttpClient) { }

  GetGuilds(): Observable<IGuild[]> {
    const guilds = this.http.get<IGuild[]>(this.guildUrl);
    return guilds;
  }
}
