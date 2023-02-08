import {Component, ElementRef, ViewChild} from '@angular/core';
// @ts-ignore
import theme from '../exampleTheme.json'
import {NavigationEnd, Router} from "@angular/router";
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public version = "1.1.14"
    public cdnVersion = "prod/v1.1.14"
    public host = "https://drugst.one"
    public cdn = "https://cdn.drugst.one"
    public backendPath = "https://api.drugst.one/"
    // public backendPath = "localhost:8001/"

    public theme = theme;
    public currentTabId: number;
    @ViewChild("headerEl", {static: false}) headerEl: ElementRef | undefined;

    constructor(private router: Router, public themeService: ThemeService) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                if (val.url != null) {
                    // @ts-ignore
                    let page = val.url.substr(1).split("/")[0].split('#')[0];
                    if (page.indexOf("?")>-1){
                        // @ts-ignore
                        this.headerEl.switchTabByName("standalone")
                    }else {
                        // @ts-ignore
                        this.headerEl.switchTabByName(page)
                    }
                }
            }
        })
        this.currentTabId = 0;
        let cookieDark = localStorage.getItem("darkTheme") === 'true'
        let darkTheme = false;
        if (localStorage.getItem("darkTheme") == null)
            darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        else
            darkTheme = cookieDark;
        localStorage.setItem("darkTheme", darkTheme + "");
    }

    switchTab(tabId: number) {
        if (this.currentTabId !== tabId) {
            this.currentTabId = tabId
            // @ts-ignore
            this.headerEl.tabChange(tabId)
        }
    }

}
