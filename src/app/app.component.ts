import {Component} from '@angular/core';
// @ts-ignore
import theme from '../exampleTheme.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';
  public version = "0.8.0"
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
