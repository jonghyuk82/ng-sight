import { Component, OnInit, Input, Output } from '@angular/core';
import { ChartType } from 'chart.js';
import { subscribeOn } from 'rxjs/operators';
import { SalesDataService } from 'src/app/services/sales-data.service';
import { Order } from 'src/app/shared/order';
import { map } from 'rxjs/operators';
import * as lodash from 'lodash';
import { THEME_COLORS } from 'src/app/shared/theme.colors';

const theme = 'Default';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  // constructor() {}

  // pieChartData: number[] = [350, 450, 120];
  // pieChartLabels: string[] = [
  //   'XYZ Logistics',
  //   'Main St Bakery',
  //   'Acme Hosting',
  // ];
  // colors: any[] = [
  //   {
  //     backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
  //     borderColor: '#111',
  //   },
  // ];

  // pieChartType: ChartType = 'doughnut';

  @Input() inputData: any;
  @Input() limit: number;

  constructor() {}

  pieChartData: number[];
  pieChartLabels: string[];
  // colors: any[] = [
  //   {
  //     backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
  //     borderColor: '#111',
  //   },
  // ];
  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: '#111',
    },
  ];

  pieChartType: ChartType = 'doughnut';


  ngOnInit()
  {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number)
  {    
    const allData = res.slice(0, limit);
    console.log(allData)

    // this cannot be used because there are two different object name x['name'] and x['state']
    // to resolve the issue, using lodash

    // this.pieChartData = allData.map((x: any) => x['total']);
    // this.pieChartLabels = allData.map((x: any) => x['name']);

    this.pieChartData = allData.map((x: any) => lodash.values(x)[1]);
    this.pieChartLabels = allData.map((x: any) => lodash.values(x)[0]);  
    
  }

  themeColors(setName: string): string[]
  {
    const c:string[] = THEME_COLORS.slice(0)
      .find(set => set.name === setName)?.colorSet;
    return c;
  }


  
}
