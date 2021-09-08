import {Component, ElementRef, ViewChild} from '@angular/core';
// @ts-ignore
import theme from '../exampleTheme.json'
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public version = "0.8.6-rc8"
    public serverVersion = "dock1"
    public backendPath = "http://ml-s-zbhdock1.ad.uni-hamburg.de/drugstone_api/"

    public theme = theme;
    public currentTabId: number;
    @ViewChild("header", {static: false}) headerEl: ElementRef | undefined;

    constructor(private router: Router) {
        router.events.subscribe((val)=>{
            if(val instanceof NavigationEnd) {
                // @ts-ignore
                this.headerEl.switchTabByName(val.url.substr(1))
            }
        })
        this.currentTabId = 0;
        let cookieDark = localStorage.getItem("darkTheme") ==='true'
        let darkTheme = false;
        if(localStorage.getItem("darkTheme") == null)
            darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        else
            darkTheme = cookieDark;
        localStorage.setItem("darkTheme",darkTheme+"");
    }

    switchTab(tabId: number) {
        if (this.currentTabId !== tabId) {
            this.currentTabId = tabId
            // @ts-ignore
            this.headerEl.tabChange(tabId)
        }
    }


}
