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
    // @ts-ignore
    if(!this.model && this.items && this.items[0] && this.items[0].label){
      // @ts-ignore
      this.model=this.items[0].label
    }
  }

    emitChange() {
        this.onChange.emit(this.model)
    }
}
