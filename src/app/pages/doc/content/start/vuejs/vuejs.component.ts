import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-vuejs',
  templateUrl: './vuejs.component.html',
  styleUrls: ['./vuejs.component.scss']
})
export class VuejsComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  externalsCode = "module.exports = {\n" +
      "   externals: {\n" +
      "      'network-expander': 'ELEMENT'\n" +
      "   }\n" +
      "}"
  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
