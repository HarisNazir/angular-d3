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
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  chart: any;

  ngAfterViewInit() {
    let ctx: any = document.getElementById('barChart') as HTMLElement;
    var data = {
      labels: ['match1', 'match2', 'match3', 'match4', 'match5'],
      datasets: [
        {
          label: 'Score',
          data: [10, 50, 25, 70, 40],
          backgroundColor: ['blue', 'red', 'green', 'yellow', 'orange'],
          borderColor: 'lightblue',
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
      type: 'bar',
      data: data,
      options: options,
    });
  }
}

