import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { LINE_CHART_COLORS } from 'src/app/shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data:[32, 14, 46, 23, 38, 56], label:'Sentiment Analysis'},
  {data:[12, 18, 26, 13, 28, 26], label:'Image Recongnition'},
  {data:[52, 34, 46, 53, 68, 62], label:'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  lineChartLabels: string[] = LINE_CHART_LABELS;
  lineChartOptions: any = {   
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }

}
