import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
    providedIn: 'root',
    }
)
export class ThemeService {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    // default theme
    public theme: 'theme-dark' | 'theme-light' = 'theme-light';

    switchTheme(theme: 'theme-dark' | 'theme-light'){
        this.theme = theme;
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
        if(themeLink)
            themeLink.href=theme+".css";
    }
}