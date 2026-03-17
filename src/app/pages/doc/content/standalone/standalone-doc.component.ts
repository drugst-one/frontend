import { CommonModule } from "@angular/common";
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-standalone-doc',
  templateUrl: './standalone-doc.component.html',
  styleUrls: ['./standalone-doc.component.scss']
})
export class StandaloneDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() navigate = new EventEmitter<string>();

}
