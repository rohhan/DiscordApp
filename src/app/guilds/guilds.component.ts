import { Component, OnInit } from '@angular/core';
import { GuildService } from '../services/guild.service';
import { IGuild } from '../models/guild';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent implements OnInit {

  currentGuild: IGuild;

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.currentGuild = this.guildService.GetGuilds();
  }

}
