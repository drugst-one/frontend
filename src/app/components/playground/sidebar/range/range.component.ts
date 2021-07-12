import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  @Input() public model: number= 1;
  @Input() public min: number=0;
  @Input() public max: number=100;
  @Input() public label: string ="";
  @Input() public tooltip: string= "";
  @Output() public onChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(){
    this.onChange.emit(this.model)
  }

}
