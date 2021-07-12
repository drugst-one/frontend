import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
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
