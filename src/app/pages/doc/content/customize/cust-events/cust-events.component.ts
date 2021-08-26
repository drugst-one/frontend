import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cust-events',
  templateUrl: './cust-events.component.html',
  styleUrls: ['./cust-events.component.scss']
})
export class CustEventsComponent implements OnInit {

  @Input() api = ""

  constructor() { }

  ngOnInit(): void {
  }

}
