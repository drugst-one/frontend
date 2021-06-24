import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-textinput',
    templateUrl: './textinput.component.html',
    styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent implements OnInit {

    @Input() public model: any = ""
    @Input() public title: any = ""
    @Input() public disabled = false;
    @Input() public tooltip = ""
    @Output() public onChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    emitChange(model: string) {
        this.onChange.emit(model)
    }
}
