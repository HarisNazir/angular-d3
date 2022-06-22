import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-arrow-chart',
  templateUrl: './arrow-chart.component.html',
  styleUrls: ['./arrow-chart.component.scss'],
})
export class ArrowChartComponent implements OnInit {
  private data = [
    {start: 1 / 180 * Math.PI, end: 119 / 180 * Math.PI,fill:"#43a2ca",inner:150,outer:200},
    {start: 121 / 180 * Math.PI, end: 239 / 180 * Math.PI,fill:"#43a2ca",inner:150,outer:200},
    {start: 241 / 180 * Math.PI, end: 359 / 180 * Math.PI,fill:"#43a2ca",inner:150,outer:200},
    {start: 119 / 180 * Math.PI, end: 1 / 180 * Math.PI,fill:"#0868ac",inner:205,outer:215},
    {start: 239 / 180 * Math.PI, end: 121 / 180 * Math.PI,fill:"#0868ac",inner:205,outer:215},
    {start: 359 / 180 * Math.PI, end: 241 / 180 * Math.PI,fill:"#0868ac",inner:205,outer:215},	
    {start: 200 / 180 * Math.PI, end: -159 / 180 * Math.PI,fill:"#e0f3db",inner:100,outer:145},	
    {start: 1 / 180 * Math.PI, end: 359 / 180 * Math.PI,fill:"#a8ddb5",inner:45,outer:95}
  ];

    private svg: any;
    private margin = 50;
    private width = 750 - this.margin * 2;
    private height = 400 - this.margin * 2;

    private createSvg(): void {
        this.svg = d3.select("figure#arrow")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .append("g")
        .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    }

    private createArc(data: any[]): void {
        const arc = d3.arc()
        .innerRadius(50)
        .outerRadius(70)
        .startAngle(45 * (Math.PI / 180))
        .endAngle(3);

        this.svg.append("g")
        .attr("d", arc)
        .attr("transform", "translate(0," + this.height + ")");
    }

    constructor() {}

    ngOnInit(): void {
        this.createSvg();
        this.createArc(this.data);
    }
}
