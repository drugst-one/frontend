import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-colorpicker',
    templateUrl: './colorpicker.component.html',
    styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {

    @Input() public title = "";
    @Input() public model:any = "white";
    @Input() public tooltip = "";
    @Input() public format = "hex";
    @Output() public onChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    emitChange() {
        // if (this.formatIn === this.formatOut)
        //     this.onChange.emit(this.model)
        // else{
        //     if(this.formatIn ==="hex")
        this.onChange.emit(this.model)
        // else this.onChange.emit(this.RGBToHex(this.model[0],this.model[1], this.model[2]))
    }

}
