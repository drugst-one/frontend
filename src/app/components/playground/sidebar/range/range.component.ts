import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  standalone: true,
  imports: [CommonModule, InputTextModule, TooltipModule, FormsModule, SliderModule]
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
