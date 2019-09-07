import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.GetUsers().subscribe({
      next: users => {
        this.dataSource = new MatTableDataSource<IUser>(users);
      },
      error: err => {
        this.dataSource = new MatTableDataSource<IUser>(this.sampleUserData);
      }
    });
  }
}
