import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from 'src/routes';
import { HttpClientModule } from '@angular/common/http';

// Services
import { SalesDataService } from './services/sales-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ServerComponent } from './server/server.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    SalesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
