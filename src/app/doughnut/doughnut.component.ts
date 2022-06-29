import { Component, OnInit, ɵresetJitOptions } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent {

  chart: any;

  ngAfterViewInit() {

    let ctx: any = document.getElementById('doughnutChart') as HTMLElement;

    var data = {
      labels: ['Data1', 'Data2', 'Data3', 'Data4', 'Data5'],
      datasets: [
        {
          data: [10, 50, 25, 70, 40],
          backgroundColor: ['blue', 'red', 'green', 'yellow', 'orange'],
          fill: false,
        },
      ]
    };

    var options = {
      legend: {
        display: false,
      },
      title: {
        display: true,
        position: 'top',
        text: 'Doughnut Chart',
        fontSize: 18,
        fontColor: '#111',
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    };
    
    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });



    };
  }




