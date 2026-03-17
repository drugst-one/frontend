import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-textinput',
    templateUrl: './textinput.component.html',
    styleUrls: ['./textinput.component.scss'],
    standalone: true,
    imports: [CommonModule, InputTextModule, TooltipModule, FormsModule, ButtonModule, RippleModule]
})
export class TextinputComponent implements OnInit {

    @Input() public model: any = ""
    @Input() public label: any = ""
    @Input() public disabled = false;
    @Input() public tooltip = ""
    @Output() public onChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    emitChange() {
        this.onChange.emit(this.model)
    }

    keyPress($event: KeyboardEvent) {
        if($event.code==='Enter')
            this.emitChange()
    }
}
