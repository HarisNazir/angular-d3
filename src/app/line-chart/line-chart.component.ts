import { Component, ViewChild } from '@angular/core';

import Chart from 'chart.js/auto';
import * as Utils from '../utils.js';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  chart: any;

  ngAfterViewInit() {
    let ctx: any = document.getElementById('lineChart') as HTMLElement;
    var data = {
      labels: ['match1', 'match2', 'match3', 'match4', 'match5'],
      datasets: [
        {
          label: 'TeamA Score',
          data: [10, 50, 25, 70, 40],
          backgroundColor: 'rgb(145,44,102)',
          borderColor: 'rgb(145,44,102)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'TeamB Score',
          data: [20, 35, 40, 60, 50],
          backgroundColor: 'rgb(184,81,49)',
          borderColor: 'rgb(184,81,49)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'TeamC Score',
          data: [30, 25, 50, 80, 45],
          backgroundColor: 'rgb(129,112,74)',
          borderColor: 'rgb(129,112,74)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };

    var chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins:{
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            }
          }
        }
      },
    });
  }
}

