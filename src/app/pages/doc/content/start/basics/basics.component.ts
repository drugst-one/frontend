import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// @ts-ignore
import CONFIG from '../../../../../configs/default.js'

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  constructor() { }
  @Output() navigate = new EventEmitter<string>();
  @Input() cdn : string= "";
  basicCode= ""

  is_stable = CONFIG.is_stable

  ngOnInit(): void {
    if(!this.is_stable) {
      this.basicCode = "<head>\n" +
          "   <script src=\"" + this.cdn + "/latest/drugstone.js\"></script>\n" +
          "   <link rel=\"stylesheet\" href=\"" + this.cdn + "/latest/styles.css\">\n" +
          "</head>"
    }else{
       this.basicCode = "<head>\n" +
          "   <script src=\"" + this.cdn + "/stable/drugstone.js\"></script>\n" +
          "   <link rel=\"stylesheet\" href=\"" + this.cdn + "/stable/styles.css\">\n" +
          "</head>"
    }
  }
}
