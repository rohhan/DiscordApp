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
  sampleGuildData: IGuild[] = [
    { dateCreated: new Date(), guildId: '1234', guildName: 'Turn on the backend API', ownerId: '1111' },
    { dateCreated: new Date(), guildId: '5678', guildName: 'Pokemon Masters', ownerId: '2222' },
    { dateCreated: new Date(), guildId: '9012', guildName: 'Web Team Dropouts', ownerId: '3333' }
  ];

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.guildService.GetGuilds().subscribe({
      next: guilds => {
        this.dataSource = new MatTableDataSource<IGuild>(guilds);
      },
      error: err => {
        this.dataSource = new MatTableDataSource<IGuild>(this.sampleGuildData);
      }
    });
  }
}
