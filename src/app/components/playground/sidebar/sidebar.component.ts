import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() configChangeEvent = new EventEmitter<object>();
  public toggleSideLeft:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeConfig(name: string, value: any) {
    let out = {}
    // @ts-ignore
    out[name]=value;
    this.configChangeEvent.emit(out)
  }
}
