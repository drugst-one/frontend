import {CommonModule} from '@angular/common';
import {Component, ElementRef, ViewChild} from '@angular/core';
// @ts-ignore
import theme from '../exampleTheme.json'
import {NavigationEnd, Router} from "@angular/router";
import { ThemeService } from 'src/app/services/theme.service';
import {HeaderComponent} from './components/header/header.component';
// @ts-ignore
import CONFIG from './configs/default.js'
import {PagesComponent} from "./pages/pages.component";
import {FooterComponent} from "./components/footer/footer.component";

import fontawesome from '@fortawesome/fontawesome';
import {
    faAngleRight,
    faChevronDown,
    faChevronUp,
    faCode,
    faExclamationTriangle,
    faLongArrowAltRight,
    faCogs,
    faProjectDiagram,
    faToolbox,
    faColumns,
    faShoePrints,
    faCodeBranch,
    faPalette,
    faBullhorn,
    faMagic,
    faDatabase,
    faGlobe,
    faCapsules,
    faSun,
    faMoon,
    faHashtag,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {faClipboard, faEnvelope, faListAlt, faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faAngular, faReact, faVuejs, faRProject, faHtml5, faPython, faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports:[
        CommonModule, HeaderComponent, PagesComponent, FooterComponent
    ]
})
export class AppComponent {
    public version = CONFIG.version
    public host = CONFIG.host
    public cdn = CONFIG.cdn
    public backendPath = CONFIG.backendPath

    public theme = theme;
    public currentTabId: number;
    @ViewChild("headerEl", {static: false}) headerEl: ElementRef | undefined;

    constructor(private router: Router, public themeService: ThemeService) {
        // @ts-ignore
        fontawesome.library.add(faCodeBranch,
            faPalette,faMagic,faDatabase, faGlobe,faCapsules,faSun, faMoon,faHashtag,faGithub, faTrash,
            faBullhorn, faColumns, faShoePrints, faPython, faHtml5, faToolbox, faRProject, faProjectDiagram, faCogs, faClipboard, faExclamationTriangle, faChevronDown, faChevronUp, faCode, faLongArrowAltRight, faAngleRight, faListAlt, faQuestionCircle, faEnvelope, faAngular, faVuejs, faReact)

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
        this.themeService.switchTheme(darkTheme ? 'theme-dark' : 'theme-light')
    }

    switchTab(tabId: number) {
        if (this.currentTabId !== tabId) {
            this.currentTabId = tabId
            // @ts-ignore
            this.headerEl.tabChange(tabId)
        }
    }

}
