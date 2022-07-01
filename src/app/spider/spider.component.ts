import { Component, ViewChild } from '@angular/core';
// import {
//   Chart,
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle,
//   ChartDataset,
//   ScatterDataPoint,
//   BubbleDataPoint
// } from 'chart.js';

import Chart from 'chart.js/auto';
import * as Utils from '../utils.js';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.scss']
})
export class SpiderComponent {
  chart: any;

  ngAfterViewInit() {
    let ctx: any = document.getElementById('spiderChart') as HTMLElement;
    var data = {
      labels: ['Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Category6', 'Category7', 'Category8'],
      datasets: [
        {
          label: 'Line1',
          data: [10, 50, 25, 70, 40, 60, 30, 80],
          backgroundColor: 'rgb(145,44,102)',
          borderColor: 'rgb(145,44,102',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Line2',
          data: [20, 40, 30, 60, 50, 60, 40, 60],
          backgroundColor: 'rgb(184,81,49)',
          borderColor: 'rgb(184,81,49)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Line3',
          data: [30, 40, 45, 30, 60, 20, 40, 40],
          backgroundColor: 'rgb(129,112,74)',
          borderColor: 'rgb(129,112,74)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };

    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: 'top',
        text: 'Line Graph',
        fontSize: 18,
        fontColor: '#111',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16,
        },
      },
    };

    var chart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options,
    });
  }
}

