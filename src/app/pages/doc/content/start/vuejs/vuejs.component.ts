import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from '../../../../../components/code/code.component';

@Component({
  selector: 'app-vuejs',
  standalone: true,
  imports: [CommonModule, CodeComponent],
  templateUrl: './vuejs.component.html',
  styleUrls: ['./vuejs.component.scss']
})
export class VuejsComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  webpackCode = "module.exports = {\n" +
      "   externals: {\n" +
      "      'drugst-one': 'ELEMENT'\n" +
      "   }\n" +
      "}"
  vueCode = "module.exports = {\n" +
      "   configureWebpack:\n"+
      "      externals: {\n" +
      "         'drugst-one': 'ELEMENT'\n" +
      "      }\n" +
      "   }\n"+
      "}"
  constructor() { }

  ngOnInit(): void {
  }
}
