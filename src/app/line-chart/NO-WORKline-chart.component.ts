import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

type Data = {
  year: number;
  spending: number;
}
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  // Sample Line Chart Data
  private data: any = [
  { year: 2016, spending: 100 },
  { year: 2017, spending: 200 },
  { year: 2018, spending: 300 },
  { year: 2019, spending: 400 },
  { year: 2020, spending: 500 },
  { year: 2021, spending: 600 },
  { year: 2022, spending: 700 }
  ];

  private margin = { top: 20, right: 20, bottom: 50, left: 70 };
  private width = 960 - this.margin.left - this.margin.right;
  private height = 500 - this.margin.top - this.margin.bottom;

  private parseTime = d3.timeParse("%d-%b-%y");

  private x = d3.scaleLinear().range([0, this.width]);
  private y = d3.scaleLinear().range([this.height, 0]);
  private svg: any;

  createLineChart() {

  const valueLine = d3.line()
    .x((d: any) => this.x(d.year))
    .y((d: any) => this.y(d.spending));

    const svg = d3.select('#line')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

      this.x.domain(d3.extent(this.data as any, (d: any) => d.year) as any);
      this.y.domain(d3.extent(this.data as any, (d: any) => d.spending) as any);

      this.svg.append('path')
        .data([this.data])
        .attr('class', 'line')
        .attr("d", valueLine);

      this.svg.append('g')
        .attr('transform', 'translate(0, ' + this.height + ')')
        .call(d3.axisBottom(this.x));
    }
  

  constructor() { }

  ngOnInit(): void {
    this.createLineChart();
  }

}
