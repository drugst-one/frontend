import { DividerModule } from "primeng/divider";
import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, DividerModule],
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
