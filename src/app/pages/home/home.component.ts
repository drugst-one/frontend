import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() tabChangeEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

    tabChange(number: number) {
        this.tabChangeEvent.emit(number)
    }
}
