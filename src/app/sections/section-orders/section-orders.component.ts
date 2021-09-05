import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';
import { SalesDataService } from 'src/app/services/sales-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css'],
})
export class SectionOrdersComponent implements OnInit {
  // constructor() { }

  // orders: Order[] = [
  //   {
  //     id: 1, customer:
  //       { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
  //     total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
  //   },
  //   {
  //     id: 2, customer:
  //       { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
  //     total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
  //   },
  //   {
  //     id: 3, customer:
  //       { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
  //     total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
  //   },
  //   {
  //     id: 4, customer:
  //       { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
  //     total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
  //   },
  //   {
  //     id: 5, customer:
  //       { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
  //     total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
  //   },
  // ];

  constructor(private _salesData: SalesDataService) {}

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this._salesData.getOrders(this.page, this.limit).subscribe((res) => {
      console.log('Result from getOrders: ', res);
      this.orders = res['page']['data'];
      this.total = res['page']['total'];
      this.loading = false;
    });
  }

  goToPrevious(): void {
    //console.log('Previous button clicked');
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    //console.log('Next button clicked');
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }

  goToFirst(): void
  {
    this.page = 1;
    this.getOrders();
  }

  goToLast(): void
  {
    console.log('total:',this.total);
    this.page = Math.ceil(this.total / this.limit);    
  }
}
