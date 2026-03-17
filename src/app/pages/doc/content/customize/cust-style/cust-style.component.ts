import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { Component, OnInit } from '@angular/core';
import { MessagesModule } from 'primeng/messages';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, MessagesModule],
  selector: 'app-cust-style',
  templateUrl: './cust-style.component.html',
  styleUrls: ['./cust-style.component.scss']
})
export class CustStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
