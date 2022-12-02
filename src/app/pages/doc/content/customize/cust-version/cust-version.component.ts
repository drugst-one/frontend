import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cust-version',
  templateUrl: './cust-version.component.html',
  styleUrls: ['./cust-version.component.scss']
})
export class CustVersionComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Input() version = ""
  @Input() cdn = ""
  @Input() api = ""
  basicCode = ""
  versionCode= ""
  nightlyCode = ""
  constructor() { }

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\""+this.cdn+"/latest/drugstone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.cdn+"/latest/styles.css\">\n" +
        "</head>'"
    this.versionCode="<head>\n" +
        "   <script src=\""+this.cdn+"/"+this.version+"/drugstone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.cdn+"/"+this.version+"/styles.css\">\n" +
        "</head>'"
    this.nightlyCode="<head>\n" +
        "   <script src=\""+this.api+"/cdn/nightly/drugstone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.api+"/cdn/nightly/styles.css\">\n" +
        "</head>'"
  }

}
