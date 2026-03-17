import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    standalone: true,
    imports: [CommonModule, InputSwitchModule, TooltipModule, FormsModule]
})
export class SwitchComponent implements OnInit {

    @Input() public label = "";
    @Input() public model = false;
    @Input() public tooltip = "";
    @Output() public onChange = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    emitChange($event: any) {
        this.onChange.emit($event)
    }
}
