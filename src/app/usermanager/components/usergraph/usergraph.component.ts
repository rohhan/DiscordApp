import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUserCountData } from 'src/app/models/usercountdata';

@Component({
  selector: 'app-user-graph',
  templateUrl: './usergraph.component.html',
  styleUrls: ['./usergraph.component.scss']
})
export class UserGraphComponent implements OnInit {
  public lineChartOptions = {
    elements: {
      line: {
        tension: .1
      }
    },
    responsivness: true,
    scaleShowVerticalLines: true,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month'
        }
      }]
    }
  };

  public lineChartType = 'line';
  public lineChartLegend = false;
  public lineChartData = [{
    data: [
      { x: new Date(), y: 0 },
      { x: new Date(), y: 0 },
      { x: new Date(), y: 0 },
    ]
  }];
  realLineChartData: { x: Date, y: number }[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.initializeDataSource();
  }

  initializeDataSource() {
    console.log('initialize data source');
    this.userService.getUserCount('1234').subscribe({
      next: userCount => {
        this.realLineChartData = userCount.map(val => ({ x: val.date, y: val.count }));
        this.lineChartData = [{
          data: this.realLineChartData
        }];
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
