import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  public currentTabId :number;

  constructor() {
    this.currentTabId=2;
  }


  switchTab(tabId: number) {
    if (this.currentTabId !== tabId) {
      this.currentTabId = tabId
    }
  }
}
