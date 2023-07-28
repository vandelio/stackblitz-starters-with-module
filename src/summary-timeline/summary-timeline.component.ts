import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'summary-timeline',
  templateUrl: './summary-timeline.component.html',
  styleUrls: ['./summary-timeline.component.css']
})
export class SummaryTimelineComponent implements OnInit {
  actions = [
    {date:'28/07/2023', action:'Consultation call'},
    {date:'02/08/2023', action:'Preventive Maintenance'},
    {date:'12/09/2023', action:'Replace Air Filter'},

  ];
  constructor() { }

  ngOnInit() {
  }

}