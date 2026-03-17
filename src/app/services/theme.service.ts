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
        if (theme === 'theme-dark') {
            this.document.documentElement.classList.add('theme-dark');
        } else {
            this.document.documentElement.classList.remove('theme-dark');
        }
    }
}