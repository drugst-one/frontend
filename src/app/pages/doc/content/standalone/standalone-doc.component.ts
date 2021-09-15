import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-standalone-doc',
  templateUrl: './standalone-doc.component.html',
  styleUrls: ['./standalone-doc.component.scss']
})
export class StandaloneDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() navigate = new EventEmitter<string>();
  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
