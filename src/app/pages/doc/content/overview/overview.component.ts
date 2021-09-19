import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
