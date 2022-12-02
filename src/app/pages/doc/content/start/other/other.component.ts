import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
