import {Component, Directive, TemplateRef} from '@angular/core';
// @ts-ignore
import theme from '../exampleTheme.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';
  public version = "0.8.2-rc3"
  public backendPath = "http://ml-s-zbhdock1.ad.uni-hamburg.de/drugstone_api/"
  public theme = theme;
  public currentTabId :number;

  constructor() {
    this.currentTabId=0;
  }

  switchTab(tabId: number) {
    if (this.currentTabId !== tabId) {
      this.currentTabId = tabId
    }
  }
}
