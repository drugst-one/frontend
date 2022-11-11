import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

    @Input() api = ""
    @Input() version = ""
    @Input() cdn = ""
    @Input() host = ""
    public idPath = [0]
    public path = []
    public page = 0
    public idMap = {}

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        if (window.location.href.indexOf('doc#') > -1) {
            setTimeout(() => {
                const el = document.getElementById(window.location.href.split('#')[1])
                // @ts-ignore
                el.scrollIntoView()
            }, 500)
        }
    }
}
