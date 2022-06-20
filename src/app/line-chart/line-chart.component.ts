import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];

  // private svg;
  // private margin = 50;
  // private width = 750 - (this.margin * 2);
  // private height = 400 - (this.margin * 2);

  // private createSvg(): void {
  //   this.svg = d3.select("#line-chart")
  //     .append("svg")
  //     .attr("width", this.width + this.margin * 2)
  //     .attr("height", this.height + this.margin * 2)
  //     .append("g")
  //     .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  // }

  private drawBars(data: any[]): void { 
    //Create the X-axis band scale
    const x = d3.scaleBand()
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
