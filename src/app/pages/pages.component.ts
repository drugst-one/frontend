import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  @ViewChild("playground", {static: false}) playgroundEl: ElementRef | undefined;
  @ViewChild("standalone", {static: false}) standaloneEl: ElementRef | undefined;
  @Input() public version : string = ""
  @Input() public cdnVersion : string = ""
  @Input() public cdn : string = ""
  @Input() public backendPath :string = ""
  @Input() public host: string=""

  @Input() public theme = {};
  @Input() public currentTabId: number=0;

  @Output() public tabChangeEvent = new EventEmitter<number>();
  @Output() public tabIdChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  fitPlayground() {
    // @ts-ignore
    this.playgroundEl?.fit()
  }

  switchTheme($event: boolean) {
    // @ts-ignore
    this.standaloneEl?.switchTheme($event)
  }

  tabChange($event: number) {
    this.tabChangeEvent.emit($event)
  }

  switchTab(tabId: number) {
    if (this.currentTabId !== tabId) {
      this.currentTabId = tabId
      this.tabIdChangeEvent.emit(tabId)
    }
  }
}
