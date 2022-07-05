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
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
//   ngOnInit(): void {
//     Bars()
//   }
//   const data = [
//     { label: '0 - 5 days', value: 27, color: 'red', bgColor: 'lightsalmon' },
//     { label: '5 - 10 days', value: 54, color: 'blue', bgColor: 'lightblue' },
//     { label: '10+ days', value: 85, color: 'green', bgColor: 'lightgreen' },
// ];
//   Bars(selector, data, maxValue) {

//     const wrapper = document.querySelector(selector);
//     let html = '';
//     data.forEach((item, idx) => {
//         html += `
//             <div class="labels">
//                 <div class="label">${item.label}</div>
//                 <div class="value">${item.value}</div>
//             </div>
//             <div class="wrapper-bar">
//                 <div class="bar" style="width: 0;"></div>    
//             </div>
//             `;
//     });
//     wrapper.innerHTML = html;
//     this.update = data => {
//         const
//             values = wrapper.querySelectorAll('.value'),
//             wrapperBars = wrapper.querySelectorAll('.wrapper-bar'),
//             bars = wrapper.querySelectorAll('.bar');
//         data.forEach((item, idx) => {
//             values[idx].textContent = item.value;
//             bars[idx].style.width = item.value / maxValue * 100 + '%';
//             wrapperBars[idx].style.backgroundColor = item.bgColor;
//             bars[idx].style.backgroundColor = item.color;
//         });
//     }
//     setTimeout(() => {
//         this.update(data);
//     });
// }

// // Create bars initially:
// theBars = new Bars('#wrapper-bars', data, 100, 5);

// // Just for demo: Update values after 2 secs:
// setTimeout(() => {
//     data.forEach(item => {
//         item.value += 10;
//     });
//     theBars.update(data)
// }, 2000);
}
