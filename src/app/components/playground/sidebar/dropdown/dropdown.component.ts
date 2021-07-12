import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {

  @Input() public items:object[]=[]
  @Input() public model:any = ""
  @Input() public label = ""
  @Input() public tooltip = ""
  @Output() public onChange = new EventEmitter<string>();
  @Input() public fill = false;

  constructor() { }

  ngOnInit(): void {
  }

    emitChange() {
        this.onChange.emit(this.model)
    }
}
