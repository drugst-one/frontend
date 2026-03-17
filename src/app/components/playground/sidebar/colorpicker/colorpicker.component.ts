import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-colorpicker',
    templateUrl: './colorpicker.component.html',
    styleUrls: ['./colorpicker.component.scss'],
    standalone: true,
    imports: [CommonModule, ColorPickerModule, TooltipModule, FormsModule, InputTextModule, ButtonModule, RippleModule]
})
export class ColorpickerComponent implements OnInit {

    @Input() public label = "";
    @Input() public model:any = "#000000";
    @Input() public tooltip = "";
    @Input() public format: "hex" | "rgb" | "hsb" = "hex";
    @Input() public textinput = true;
    @Output() public onChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    emitChange() {
        this.onChange.emit(this.model)
    }

}
