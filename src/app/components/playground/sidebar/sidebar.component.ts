import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() configChangeEvent = new EventEmitter<object>();
  public toggleSideLeft:boolean = true;
  public nodeGroups = {
    "0.5": {"type": "gene", "color": "rgb(204, 255, 51)", "name": "0.5", "shape": "circle"},
    "1.5": {"type": "gene", "color": "rgb(102, 255, 51)", "name": "1.5", "shape": "circle"},
    "2.0": {"type": "gene", "color": "rgb(51, 204, 51)", "name": "2.0", "shape": "circle"},
    "-2.0": {"type": "gene", "color": "rgb(255, 0, 0)", "name": "-2.0", "shape": "circle"}
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeConfig(name: string, value: any) {
    let out = {}
    // @ts-ignore
    out[name]=value;
    this.configChangeEvent.emit(out)
  }

  objectAsList(object: object){
    console.log(object)
    console.log(Object.entries(object))
    return Object.entries(object);
  }

}
