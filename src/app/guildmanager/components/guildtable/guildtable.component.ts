import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IGuild } from 'src/app/models/guild';
import { GuildService } from 'src/app/services/guild.service';

@Component({
  selector: 'app-guild-table',
  templateUrl: './guildtable.component.html',
  styleUrls: ['./guildtable.component.scss']
})
export class GuildTableComponent implements OnInit {
  displayedColumns: string[] = ['dateCreated', 'guildId', 'guildName', 'ownerId'];
  dataSource: MatTableDataSource<IGuild>;
  guildz: IGuild[];

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.guildService.GetGuilds().subscribe({
      next: guilds => {
        this.dataSource = new MatTableDataSource<IGuild>(guilds);
        this.guildz = guilds;
        console.log(this.guildz);
      }
    });
  }
}
