import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-ui-network',
  standalone: true,
  imports: [CommonModule, MessagesModule],
  templateUrl: './ui-network.component.html',
  styleUrls: ['./ui-network.component.scss']
})
export class UiNetworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
