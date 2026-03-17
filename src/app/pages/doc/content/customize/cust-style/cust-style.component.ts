import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { Component, OnInit } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, MessageModule],
  selector: 'app-cust-style',
  templateUrl: './cust-style.component.html',
  styleUrls: ['./cust-style.component.scss']
})
export class CustStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
