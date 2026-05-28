import { Component, Input } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { HighlightJsModule } from 'ngx-highlight-js';

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, HighlightJsModule]
})
export class CodeComponent {

    @Input() public lang: string = "";
    @Input() public code: string = "";
    @Input() public copy: boolean = true;

    constructor(private clipboard: Clipboard) {}

    toClipboard(): void {
        // Copy the Angular property directly instead of reading the DOM
        this.clipboard.copy(this.code);
    }
}