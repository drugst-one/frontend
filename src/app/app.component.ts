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
    public version = "0.8.9-rc6"
    public serverVersion = "dock1"
    public host = "http://drugst.one"
    public backendPath = this.host+"/drugstone_api/"
    // public backendPath = "localhost:8001/"

    public theme = theme;
    public currentTabId: number;
    @ViewChild("header", {static: false}) headerEl: ElementRef | undefined;

    constructor(private router: Router) {
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
