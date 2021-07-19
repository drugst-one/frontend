import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

    @Input() public lang: string = "";
    @Input() public code: string = "";
    @Input() public copy: boolean = true;
    @ViewChild('codeArea', {static: false}) codeEl: ElementRef | undefined;

    constructor(private clipboard:Clipboard) {
    }

    ngOnInit(): void {
    }

    toClipboard(): void {
        let panel = this.codeEl?.nativeElement
        this.clipboard.copy(panel.value)
    }
}
