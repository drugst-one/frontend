import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rshiny',
  templateUrl: './rshiny.component.html',
  styleUrls: ['./rshiny.component.scss']
})
export class RshinyComponent implements OnInit {

  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
