import { DocSubsubheaderComponent } from "../../../../../components/documentation/doc-subsubheader/doc-subsubheader.component";
import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { Component, OnInit } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, DocSubsubheaderComponent, MessageModule],
  selector: 'app-cust-network',
  templateUrl: './cust-network.component.html',
  styleUrls: ['./cust-network.component.scss']
})
export class CustNetworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
