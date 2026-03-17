import { CommonModule } from "@angular/common";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, TooltipModule],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Input() cdn = ""
  constructor() { }

  ngOnInit(): void {
  }
  @Output() navigate = new EventEmitter<string>();
}
