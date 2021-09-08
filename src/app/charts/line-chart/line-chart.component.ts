import { Customer } from './../../shared/customer';
import { map } from 'rxjs/operators';
import { SalesDataService } from 'src/app/services/sales-data.service';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { LINE_CHART_COLORS } from 'src/app/shared/chart.colors';
import { memoize } from 'lodash';
import * as moment from 'moment';

// const LINE_CHART_SAMPLE_DATA: any[] = [
//   {data:[32, 14, 46, 23, 38, 56], label:'Sentiment Analysis'},
//   {data:[12, 18, 26, 13, 28, 26], label:'Image Recongnition'},
//   {data:[52, 34, 46, 53, 68, 62], label:'Forecasting'}
// ];

// const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  //constructor() {}
  // lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  // lineChartLabels: string[] = LINE_CHART_LABELS;

  constructor(private _salesDataService: SalesDataService) {}

  topCustomers: string[];
  allOrders: any[];

  chartData: any[];

  lineChartData: any[];
  lineChartLabels: string[];
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe((res) => {
      this.allOrders = res['page']['data'];

      this._salesDataService.getOrderByCustomer(3).subscribe((cus) => {
        this.topCustomers = cus.map((x) => x['name']);

        const allCahrtData = this.topCustomers.reduce((result, i) => {
          result.push(this.getChartData(this.allOrders, i));
          return result;
        }, []);

        let dates = allCahrtData
          .map((x) => x['data'])
          .reduce((a, i) => {
            a.push(i.map((o: any) => new Date(o[0])));
            return a;
          }, []);

        //console.log('dates:', dates);
        dates = [].concat.apply([], dates);
        //console.log('dates:', dates);

        const r = this.getCustomerOrderByDate(allCahrtData, dates)['data'];
        console.log('r:', r);

        this.lineChartLabels = r[0]['orders'].map((o: any) => o['date']);

        this.lineChartData = [
          {
            data: r[0]['orders'].map((x: any) => x['total']),
            label: r[0]['customers'],
          },
          {
            data: r[1]['orders'].map((x: any) => x['total']),
            label: r[1]['customers'],
          },
          {
            data: r[2]['orders'].map((x: any) => x['total']),
            label: r[2]['customers'],
          },
        ];
      });
    });
  }

  getChartData(allOrders: any, name: string) {
    const customerOrders = allOrders.filter(
      (o: any) => o.customer.name === name
    );
    //console.log('name:', name, 'customerOrders:', customerOrders);

    const formattedOrders = customerOrders.reduce((r: any, e: any) => {
      r.push([e.placed, e.total]);
      return r;
    }, []);

    //console.log('formattedOrders:', formattedOrders);

    const result = { customer: name, data: formattedOrders };
    //console.log('result:', result);

    return result;
  }

  getCustomerOrderByDate(orders: any, dates: any) {
    // for each customer -> for each date
    // {data: [{'customer': 'XYZ', 'orders':[{'date': '21-08-25', 'total': 2421}]},{object},{object}]}

    const customers = this.topCustomers;
    const prettyDates = dates.map((x: any) => this.toFriendlyDate(x));
    const u = Array.from(new Set(prettyDates)).sort();
    //console.log(u);

    // define our result object to return
    const result = {};
    const dataSets: any = (result['data'] = []);
    //console.log('result:', result);
    // i = index
    customers.reduce((x: any, y: any, i: any) => {
      //console.log('i', i);
      //console.log('Reducing:', y, 'at index:', i);
      const customerOrders: any = [];
      dataSets[i] = {
        customers: y,
        orders: u.reduce((r: any, e: any, j: any) => {
          //console.log('Reducings:', e, 'at index:', j);
          const obj = {};
          obj['date'] = e;
          obj['total'] = this.getCustomerDateTotal(e, y); // sum total orders for this customer on this date
          customerOrders.push(obj);
          // console.log(
          //   'Reducingss:',
          //   e,
          //   'at index:',
          //   j,
          //   'customerOrders:',
          //   customerOrders
          // );
          return customerOrders;
        }),
      };
      return x;
    }, []);
    return result;
  }

  toFriendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getCustomerDateTotal(date: string, customer: string) {
    const r = this.allOrders.filter(
      (o) =>
        o.customer.name === customer && this.toFriendlyDate(o.placed) === date
    );
    const result = r.reduce((a: any, b: any) => {
      return a + b.total;
    }, 0);

    return result;
  }
}
