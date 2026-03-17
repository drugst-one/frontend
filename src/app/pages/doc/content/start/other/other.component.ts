import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
