import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, SelectModule, TooltipModule, FormsModule]
})

export class DropdownComponent implements OnInit, OnChanges {

  @Input() public items: any[] = []
  @Input() public model: any = ""
  @Input() public label = ""
  @Input() public tooltip = ""
  @Output() public onChange = new EventEmitter<string>();
  @Input() public fill = false;

  constructor() { }

  ngOnInit(): void {
    this.setDefaultIfEmpty();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.setDefaultIfEmpty();
    }
  }

  private setDefaultIfEmpty(): void {
    if ((this.model === "" || this.model === null || this.model === undefined) && 
        this.items && this.items.length > 0) {
      const firstItem = this.items[0];
      const defaultValue = firstItem.hasOwnProperty('value') ? firstItem.value : (firstItem.hasOwnProperty('label') ? firstItem.label : firstItem);
      this.model = defaultValue;
      // Emit the change so the parent component is aware of the default selection
      setTimeout(() => {
        this.onChange.emit(this.model);
      });
    }
  }

  emitChange() {
    this.onChange.emit(this.model)
  }
}
