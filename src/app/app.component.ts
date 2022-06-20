import { Component, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3';

  // data = [{
  //   label: 'one',
  //   children: ['all', 'the', 'rain']
  // }, {
  //   label: 'two',
  //   children: ['fails', 'mainly']
  // }, {
  //   label: 'three',
  //   children: ['on', 'the', 'plains']
  // }, {
  //   label: 'four',
  //   children: ['now', 'is', 'the']
  // }, {
  //   label: 'five',
  //   children: ['time', 'for', 'all']
  // }, {
  //   label: 'seven',
  //   children: ['good', 'men', 'to']
  // }, {
  //   label: 'eight',
  //   children: ['come', 'to', 'the']
  // }, {
  //   label: 'nine',
  //   children: ['aid', 'of their', 'country']
  // }];

  data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"} 
  ]
}
