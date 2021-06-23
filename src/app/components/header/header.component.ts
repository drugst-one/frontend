import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() tabChangeEvent = new EventEmitter<number>();
    //
    tabsModel: MenuItem[];
    activeTab: MenuItem;
    //

    constructor() {
        this.tabsModel = [
            {label: 'HOME', icon: 'pi pi-fw pi-home', command: () => this.tabChange(0)},
            {label: 'SET UP', icon: 'pi pi-fw pi-question-circle', command: () => this.tabChange(1)},
            {label: 'PLAYGROUND', icon: 'pi pi-fw pi-th-large', command: () => this.tabChange(2)},
            {label: 'DOCUMENTATION', icon: 'pi pi-fw pi-book', command: () => this.tabChange(3)}]
        this.activeTab = this.tabsModel[0];
    }

    ngOnInit() {
    }


    clickHome() {
        location.reload()
    }

    tabChange(id: number) {
        this.activeTab = this.tabsModel[id]
        this.tabChangeEvent.emit(id)
    }
}
