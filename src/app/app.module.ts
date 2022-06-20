import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SpiderComponent } from './spider/spider.component';
import { ArrowChartModule } from './arrow-chart/arrow-chart.module';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    SpiderComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArrowChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
