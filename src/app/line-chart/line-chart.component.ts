import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() public data!: { value: number, date: string }[];
  
  private width = 700;
  private height = 700;
  private margin = 50;
  
  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public lineGroup: any;

  public constructor(public chartElem: ElementRef) { }

  initChart() {
    this.svg = d3.select('#linechart')
      .append('svg')
      .attr('height', this.height);

    this.svgInner = this.svg.append('g')
      .style('transform', `translate(${this.margin}px, ${this.margin}px)`);

  }

  drawLineChart() {
    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.value) || 0])
      .range([this.height - this.margin, this.margin]);

    this.xScale=d3.scaleTime()
      .domain(d3.extent(this.data, (d: any)=> new Date(d.date)) as any);

    this.yAxis = this.svgInner.append('g')
      .attr('id', 'y-axis')
      .style('transform', `translate(` + this.margin + `px, 0)`);

    this.xAxis = this.svgInner.append('g')
      .attr('id', 'x-axis')
      .style('transform', `translate(0, ` + (this.height - 2 * this.margin) + `px)`);

    this.lineGroup = this.svgInner.append('g')
      .append('path')
      .attr('id', 'line-group')
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', '2px');

    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;

    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = d3
      .axisBottom(this.xScale)
      .ticks(10)
      .tickFormat(d3.timeFormat('%m / %Y') as any);

    this.xAxis.call(xAxis);

    const yAxis = d3
      .axisRight(this.yScale);

    this.yAxis.call(yAxis);

    const line = d3
      .line()
      .x(d=>d[0])
      .y(d=>d[1])
      .curve(d3.curveMonotoneX);

    const points: [number, number][]=this.data.map(
      (d: any) => [this.xScale(new Date(d.date)), this.yScale(d.value)]
    );

    this.lineGroup.attr('d', line(points));
    
  }

  public ngOnChange(changes: any): void{
    if (changes.hasOwnProperty('data') && this.data){
      this.initChart();
      this.drawLineChart();
      window.addEventListener('resize', () => this.drawLineChart());
    }
  }


  

  ngOnInit(): void {
    this.initChart();
    this.drawLineChart();

  }

}
