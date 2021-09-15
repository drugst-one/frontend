import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() navigate = new EventEmitter<string>();
  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
