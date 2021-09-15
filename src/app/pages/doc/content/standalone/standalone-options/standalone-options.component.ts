import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-standalone-options',
  templateUrl: './standalone-options.component.html',
  styleUrls: ['./standalone-options.component.scss']
})
export class StandaloneOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() navigate = new EventEmitter<string>();
  navigateTo(id:string): void{
    this.navigate.emit(id)
  }


}
