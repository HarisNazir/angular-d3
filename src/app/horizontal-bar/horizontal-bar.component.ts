import { Component } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent {

  chart: any;

  ngAfterViewInit() {
    let ctx: any = document.getElementById('horizontalBarChart') as HTMLElement;
    var data = {
      labels: ['match1', 'match2', 'match3'],
      datasets: [{
        label: 'Country1',
        data: [1, 4, 2],
        backgroundColor: "#E1AE3D"
      },
      {
        label: 'Country2',
        data: [3, 1, 2],
        backgroundColor: "#59222A"
      },
      {
        label: 'Country3',
        data: [2, 2, 1],
        backgroundColor: "#B85131"
      }
    ],
    };

    var chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          yAxes: {
            stacked: true
          },
          xAxes: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          }
        }
      },
    });
  }

}
