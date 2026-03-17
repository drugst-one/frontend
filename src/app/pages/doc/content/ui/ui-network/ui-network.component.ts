import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-ui-network',
  standalone: true,
  imports: [CommonModule, MessageModule],
  templateUrl: './ui-network.component.html',
  styleUrls: ['./ui-network.component.scss']
})
export class UiNetworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
