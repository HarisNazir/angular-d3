import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.scss']
})
export class SpiderComponent implements OnInit {

  @Input() public spiderdata!: { axis: string, value: number, yOffset: number, xOffset: number }[];

  constructor() { }

  ngOnInit(): void {
  }

}
