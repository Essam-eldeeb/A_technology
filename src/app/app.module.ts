import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './components/chart/chart.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { Button } from 'primeng/button';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    MiddleBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgApexchartsModule,
    QRCodeModule,
    IconFieldModule,
    InputIconModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
