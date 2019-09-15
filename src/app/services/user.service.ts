import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://localhost:44399/api/users';

  constructor(private http: HttpClient) { }

  GetUsers(guildDiscordId: string): Observable<IUser[]> {
    const users = this.http.get<IUser[]>(`${this.usersUrl}/${guildDiscordId}`);
    return users;
  }
}
