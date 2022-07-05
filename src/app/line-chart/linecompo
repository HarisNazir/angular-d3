import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() public data!: { type: string, value: number, date: string }[];
  
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

    

    const groupedData = d3.group(this.data, d => d.type);

    
    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.value) || 0])
      .range([this.height - this.margin, this.margin]);

    this.xScale=d3.scaleTime()
      .domain(d3.extent(this.data, (d: any)=> new Date(d.date)) as any);

    this.yAxis = this.svgInner.append('g')
      .attr('class', 'y-axis')
      .style('transform', `translate(` + this.margin + `px, 0)`);

    this.xAxis = this.svgInner.append('g')
    .attr('class', 'x-axis')
    .style('transform', `translate(0, ` + (this.height - 2 * this.margin) + `px)`);

      
      this.width = this.chartElem.nativeElement.getBoundingClientRect().width;

    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    console.log("Group Data", groupedData)

    groupedData.forEach((group: any) => {
      console.log("Group Key: ", group);

      // Causing Error because Group Key is undefined??
      let color: string;
      if (group[0].type === 'A') {
        color = "red";
      }
      else if (group[0].type === 'B') {
        color = "green";
      }
      else if (group[0].type === 'C') {
        color = "blue";
      }
      else{
        color = "black";
      }
      
      this.lineGroup = this.svgInner.append('g')
      .append('path')
      .attr('id', 'line-group')
      .style('fill', 'none')
      .style('stroke', color)
      .style('stroke-width', '2px');
  
      this.lineGroup.datum(group)
      .attr('d', d3.line()
      .x((d: any) => this.xScale(new Date(d.date)))
      .y((d: any) => this.yScale(d.value)));
    });
    const xAxis = d3
      .axisBottom(this.xScale)
      .ticks(10)
      .tickFormat(d3.timeFormat('%m / %Y') as any);

    // Add Grid Lines to Chart
    this.svgInner.append('g')
      .attr('class', 'grid')
      .style('transform', `translate(0, ` + (this.height - 2 * this.margin) + `px)`)
      .call(d3.axisBottom(this.xScale)
        .ticks(10)
        .tickSize(-this.height + 2 * this.margin)
        );
      
    
    // Add Gird Lines to Y Axis
    this.svgInner.append('g')
      .attr('class', 'grid')
      .style('transform', `translate(${this.margin}px, 0)`)
      .call(d3.axisLeft(this.yScale)
        .ticks(10)
        .tickSize(-this.width + 2 * this.margin)
        );
    


    this.xAxis.call(xAxis);

    const yAxis = d3
    .axisRight(this.yScale);

    this.yAxis.call(yAxis);
    
    const line = d3
    .line()
    .x(groupedData=>groupedData[0])
    .y(groupedData=>groupedData[1])
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
