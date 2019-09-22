import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['username'];
  dataSource: MatTableDataSource<IUser>;
  sampleUserData: IUser[] = [
    { username: 'Johnny Test' }
  ];
  guildDiscordId: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParamsFromRoute();
    this.initializeDataSource();
  }

  getParamsFromRoute() {
    this.route.params.subscribe(params => {
      this.guildDiscordId = params.id;
    });
  }

  initializeDataSource() {
    this.userService.getUsers(this.guildDiscordId).subscribe({
      next: users => {
        this.dataSource = new MatTableDataSource<IUser>(users);
      },
      error: err => {
        this.dataSource = new MatTableDataSource<IUser>(this.sampleUserData);
      }
    });
  }
}
