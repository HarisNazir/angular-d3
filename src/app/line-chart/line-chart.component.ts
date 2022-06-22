import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#line")
    .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
    .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawLine(): void {
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv").then(data => {

      // Create the X-axis band scale
      const x = d3.scaleBand()
        .range([0, this.width])
        .domain(data.map(d => d.name))
        .padding(0.2);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([this.height, 0]);
        
      
  }

  constructor() { }

  ngOnInit(): void {
  }

}
