import { Component, ViewChild } from '@angular/core';

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
          backgroundColor: ['rgb(184,81,49)', 'rgb(225,174,61)', 'rgb(145,44,102)', 'rgb(129,112,74)', 'rgb(89,34,42)'],
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };


    var chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins:{
          legend: {
            display: false,
          }
        }
      },
    });
  }
}

