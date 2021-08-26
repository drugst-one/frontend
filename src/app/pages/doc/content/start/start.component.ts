import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
