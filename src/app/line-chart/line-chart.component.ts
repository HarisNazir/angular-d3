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
  private data: Data[] = [
  { year: 2016, spending: 100 },
  { year: 2017, spending: 200 },
  { year: 2018, spending: 300 },
  { year: 2019, spending: 400 },
  { year: 2020, spending: 500 },
  { year: 2021, spending: 600 },
  { year: 2022, spending: 700 }
  ];

 // Create Line Chart using D3.js
  createLineChart() {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .domain([2016, 2022])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.spending) || 0])
      .range([height, 0]);
    
    const formattedData: any = this.data.map(d => [d.year, d.spending]);

    const line: any = d3.line(formattedData[0])
      .x(d => x(d[0]))
      .y(d => y(d[1]));

    const svg = d3.select('#line')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Spending ($)');

    svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', line);

    svg.selectAll('.dot')
      .data(this.data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.year))
      .attr('cy', d => y(d.spending))
      .attr('r', 3);
  }

  constructor() { }

  ngOnInit(): void {
    this.createLineChart();
  }

}
