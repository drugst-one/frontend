import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-vuejs',
  templateUrl: './vuejs.component.html',
  styleUrls: ['./vuejs.component.scss']
})
export class VuejsComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  webpackCode = "module.exports = {\n" +
      "   externals: {\n" +
      "      'network-expander': 'ELEMENT'\n" +
      "   }\n" +
      "}"
  vueCode = "module.exports = {\n" +
      "   configureWebpack:\n"+
      "      externals: {\n" +
      "         'network-expander': 'ELEMENT'\n" +
      "      }\n" +
      "   }\n"+
      "}"
  constructor() { }

  ngOnInit(): void {
  }
  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
