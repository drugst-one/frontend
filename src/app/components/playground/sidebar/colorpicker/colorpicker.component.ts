import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-colorpicker',
    templateUrl: './colorpicker.component.html',
    styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {

    @Input() public label = "";
    @Input() public model:any = "white";
    @Input() public tooltip = "";
    @Input() public format = "hex";
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
