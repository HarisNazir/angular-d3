import { Component, OnInit, ViewChild } from '@angular/core';
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
//   Decimatiimport { Component, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent implements OnInit {

  chart: any;

  ngAfterViewInit(){
    let ctx: any = document.getElementById('progressChart') as HTMLElement;

    var data = {
      labels: ['0 - 5 Days', '5 - 10 Days', '10 -15 Days', '15 + Days'],
      datasets: [{
        label: 'Weekly Sales',
        data: [18, 12, 6, 9],
        borderColor: [
          'rgba(184, 81, 49, 0.2)',
          'rgba(225, 174, 61, 0.2)',
          'rgba(130, 113, 75, 0.2)',
          'rgba(93, 39, 47, 0.2)',
        ],
        backgroundColor: [
          'rgba(184, 81, 49, 1)',
          'rgba(225, 174, 61, 1)',
          'rgba(130, 113, 75, 1)',
          'rgba(93, 39, 47, 1)',
        ],
        borderWidth: 0,
        borderSkipped: false as any,
        borderRadius: 5,
        barPercentage: 0.2,
        categoryPercentage: 0.8,
      }]
    };

    //Progress Bar Plugin
    var progressBar = {
      id: 'progressBar',
      beforeDatasetsDraw: function (chart: any, args: any, pluginOptions: any) {
        const {ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {x,y} } = chart;

        ctx.save();

        //Calculate Height
        const borderHeight = height / y.ticks.length * data.datasets[0].barPercentage * data.datasets[0].categoryPercentage;

        data.datasets[0].data.forEach((datapoint: any, index: any) => {
          // Label Text
          const fontSizeLabel = 12;
          ctx.font = `${fontSizeLabel}px sans-serif`;
          ctx.fillStyle = 'rgba(102,102,102,1)';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';

          ctx.fillText(data.labels[index], left, y.getPixelForValue(index) - fontSizeLabel - 5);


          // Value Text
          const fontSizeDatapoint = 15;
          ctx.font = `bolder ${fontSizeDatapoint}px sans-serif`;
          ctx.fillStyle = 'rgba(102,102,102,1)';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';

          ctx.fillText(datapoint, right, y.getPixelForValue(index) - fontSizeDatapoint - 5);

          // Background color of progress bar
          ctx.beginPath();
          ctx.fillStyle = data.datasets[0].borderColor[index];
          ctx.fillRect(left, y.getPixelForValue(index) - (borderHeight)/2, width, borderHeight)
        });
        
      }
    }

    var chart = new Chart(ctx,{
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid:{
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false
            }
          },
          x: {
            grid:{
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false
            }
          },
        }
      },
      plugins: [progressBar]
    });

  }

  constructor() { }

  ngOnInit() {}
}
