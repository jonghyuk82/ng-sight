import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1, customer:
        { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
      total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
    },
    {
      id: 2, customer:
        { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
      total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
    },
    {
      id: 3, customer:
        { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
      total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
    },
    {
      id: 4, customer:
        { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
      total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
    },
    {
      id: 5, customer:
        { id: 1, name: 'Main St Bakery', state: 'NY', email: 'example@example.com' },
      total: 230, placed: new Date(2021, 2, 1), fulfilled: new Date(2021, 2, 2)
    },
  ];

  ngOnInit(): void {
  }

}
