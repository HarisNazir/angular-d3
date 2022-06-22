import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
// import get from 'lodash/get';

@Component({
  selector: 'app-arrow-chart',
  templateUrl: './arrow-chart.component.html',
  styleUrls: ['./arrow-chart.component.scss']
})
export class ArrowChartComponent implements OnInit {
  
  @Input() data: any;

  private width = 500;
  private height = 500;

  c = Math.min(this.width, this.height)/2;


  //Draw Arrow Chart
  private drawArrowChart(): void {
    const svg = d3.select("figure#arrow")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

    const partition = d3.partition()
      .size([2 * Math.PI, this.c]);
    
    const arc = d3.arc()
    .innerRadius(40)
    .outerRadius(45)
    .startAngle(100)
    .endAngle(2 * 180);
    
    const g = svg.selectAll("g")
      .data(partition(this.data))
      .enter().append("g")
      .attr("transform", d => `rotate(${(d.x0 + d.x1) / 2 * 180 / Math.PI})`);

    g.append("path")
      .attr('d', function(d) {
        return d3.arc()({
          innerRadius: 40,
          outerRadius: 45,
          startAngle: 100,
          endAngle: 2 * 180
        })
      })
      .style("fill", d => d.depth ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.5)");
    
    g.append("text")
      .attr("dy", "0.35em")
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .text((d: any) => d.data.label);
  }

  constructor() { }

  ngOnInit(): void {
    if(this.data){
      this.drawArrowChart();

    }
  }

  ngOnChanges(changes: any): void {
    this.drawArrowChart();
    // if(get(changes, 'data.currentValue')){

    // }
  }

}
