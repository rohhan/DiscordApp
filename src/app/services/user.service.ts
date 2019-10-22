import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser } from '../models/user';
import { IUserCountData } from '../models/usercountdata';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = `${Constants.apiRoot}users`;

  constructor(private http: HttpClient) { }

  getUsers(guildDiscordId: string): Observable<IUser[]> {
    const users = this.http.get<IUser[]>(`${this.usersUrl}/${guildDiscordId}`);
    return users;
  }

  getUserCount(guildDiscordId: string): Observable<IUserCountData[]> {
    const userCount = this.http.get<IUserCountData[]>(`${this.usersUrl}/count/${guildDiscordId}`);
    return userCount;
  }
}
