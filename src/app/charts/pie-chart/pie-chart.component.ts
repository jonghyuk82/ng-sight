import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  pieChartData: number[] = [350, 450, 120];
  pieChartLabels: string[] = [
    'XYZ Logistics',
    'Main St Bakery',
    'Acme Hosting',
  ];
  colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111',
    },
  ];

  pieChartType: ChartType = 'doughnut';

  ngOnInit(): void {}
}
