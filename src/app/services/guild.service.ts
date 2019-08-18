import { Injectable } from '@angular/core';
import { IGuild } from '../models/guild';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor() { }

  GetGuilds(): IGuild {
    return {name: 'Test Server'};
  }
}
