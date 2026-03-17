import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  imports: [CommonModule, PanelModule]
})
export class PanelComponent implements OnInit {

  @Input() public headerIcon : string ="";
  @Input() public title: string ="";
  @Input() public collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
