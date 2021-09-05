import { AppModule } from './../../app.module';
import { Order } from 'src/app/shared/order';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { SalesDataService } from 'src/app/services/sales-data.service';
import * as moment from 'moment';

// const SAMPLE_BARCHART_DATA: any[] = [
//   {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
//   {data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales'}
// ];

// const SAMPLE_BARCHAR_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  //constructor() {}

  // public barChartData: any[] = SAMPLE_BARCHART_DATA;
  // public barChartLabels: string[] = SAMPLE_BARCHAR_LABELS;

  constructor(private _salesDataService: SalesDataService) {}

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe((res) => {
      //console.log('bar-chart:', res['page']['data']);
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map((x: any) => x[0]).reverse();
      this.barChartData = [
        { data: localChartData.map((x: any) => x[1]), label: 'Sales' },
      ];
    });
  }

  getChartData(res: Order[]) {
    this.orders = res['page']['data'];
    const data = this.orders.map((o: any) => o.total);
    const labels = this.orders.map((o: any) =>
      moment(new Date(o.placed)).format('YY-MM-DD')
    );

    //console.log('label:', labels)

    const formattedOrders = this.orders.reduce((r: any, e: any) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    //console.log('formattedOrders: ', formattedOrders);

    const p: any = [];

    const chartData = formattedOrders.reduce((r: any, e: any) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    //console.log('chartData:', chartData);

    return chartData;

    // const myData = [3, 4, 5].reduce((sum, value) => {
    //   console.log('sum:', sum, 'value:', value);
    //   return sum + value;
    // }, 0);

    //console.log('data:', data);
    //console.log('labels: ', labels);
    //console.log('myData:', myData);
  }
}
