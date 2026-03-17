import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { MenuItem } from "primeng/api";
import { ThemeService } from "../../services/theme.service";
// @ts-ignore
import CONFIG from '../../configs/default.js'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputSwitchModule, InputSwitchChangeEvent } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule, InputSwitchModule, FormsModule]
})
export class HeaderComponent implements OnInit {

    @Output() tabChangeEvent = new EventEmitter<number>();
    @Output() switchThemeEvent = new EventEmitter<boolean>();
    @Input() host: string = ""
    tabsModel: MenuItem[];
    activeTab: MenuItem;

    is_stable = CONFIG.is_stable


    constructor(public themeService: ThemeService) {
        this.tabsModel = [
            {label: 'HOME', icon: 'pi pi-fw pi-home', routerLink: 'home', command: () => this.tabChange(0)},
            {label: 'IDEA', icon: 'pi pi-fw pi-question-circle', routerLink: 'idea', command: () => this.tabChange(1)},
            { label: 'STANDALONE', icon: 'pi pi-fw pi-send', routerLink: 'standalone', command: () => this.tabChange(2) },
            {
                label: 'PLAYGROUND',
                icon: 'pi pi-fw pi-sliders-v',
                routerLink: 'playground',
                command: () => this.tabChange(3)
            },
            { label: 'DOCUMENTATION', icon: 'pi pi-fw pi-book', routerLink: 'doc', command: () => this.tabChange(4) },
            { label: 'CITE', icon: 'pi pi-fw pi-pencil', routerLink: 'cite', command: () => this.tabChange(5)},
            // { label: 'COLLABORATION', icon: 'pi pi-fw pi-phone', routerLink: 'call', command: () => this.tabChange(6) }
            ]
        this.activeTab = this.tabsModel[0];
    }

    ngOnInit() {
    }

    switchTabByName(name: string) {
        Object.entries(this.tabsModel.filter(e => e.routerLink === name)).forEach(e => {
            // @ts-ignore
            e[1].command()
        })
    }

    tabChange(id: number) {
        this.activeTab = this.tabsModel[id]
        this.tabChangeEvent.emit(id)
    }

    switchThemeStyle(dark: boolean | InputSwitchChangeEvent) {
        const isDark = typeof dark === 'boolean' ? dark : dark.checked;
        this.themeService.switchTheme(isDark ? 'theme-dark' : 'theme-light')
        this.switchThemeEvent.emit(isDark)
        localStorage.setItem("darkTheme", isDark + "")
    }
}
