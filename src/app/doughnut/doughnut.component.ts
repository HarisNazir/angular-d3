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
      labels: ['Data1', 'Data2', 'Data3', 'Data4', ],
      datasets: [
        {
          data: [10, 50, 25, 70],
          backgroundColor: ['rgb(184,81,49)', 'rgb(225,174,61)', 'rgb(145,44,102)', 'rgb(129,112,74)'],
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
      options: {
        responsive: true,
        cutout: 250,
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



    };
  }




