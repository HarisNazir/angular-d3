import { Component, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3';

  public data = [
    {
      "type": "A",
      "value": 20,
      "date": "2020-05-12T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 50,
      "date": "2020-05-14T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 30,
      "date": "2020-05-16T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 80,
      "date": "2020-05-18T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 55,
      "date": "2020-05-20T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 60,
      "date": "2020-05-22T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 45,
      "date": "2020-05-24T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 30,
      "date": "2020-05-26T12:19:00+00:00"
    },
    { "type": "A",
      "value": 40,
      "date": "2020-05-28T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 70,
      "date": "2020-05-30T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 63,
      "date": "2020-06-01T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 40,
      "date": "2020-06-03T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 50,
      "date": "2020-06-05T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 75,
      "date": "2020-06-07T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 20,
      "date": "2020-06-09T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 50,
      "date": "2020-06-11T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 80,
      "date": "2020-06-13T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 75,
      "date": "2020-06-15T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 82,
      "date": "2020-06-17T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 55,
      "date": "2020-06-19T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 35,
      "date": "2020-06-21T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 34,
      "date": "2020-06-23T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 45,
      "date": "2020-06-25T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 58,
      "date": "2020-06-27T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 34,
      "date": "2020-06-29T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 60,
      "date": "2020-07-01T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 75,
      "date": "2020-07-03T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 80,
      "date": "2020-07-05T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 29,
      "date": "2020-07-07T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 40,
      "date": "2020-07-09T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 54,
      "date": "2020-07-11T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 67,
      "date": "2020-07-13T12:19:00+00:00"
    },
    {
      "type": "A",
      "value": 90,
      "date": "2020-07-15T12:19:00+00:00"
    },
    {
      "type": "B",
      "value": 84,
      "date": "2020-07-17T12:19:00+00:00"
    },
    {
      "type": "C",
      "value": 43,
      "date": "2020-07-19T12:19:00+00:00"
    }
  ];
}
