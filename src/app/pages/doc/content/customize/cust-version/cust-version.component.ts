import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// @ts-ignore
import CONFIG from '../../../../../configs/default.js'
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

  is_stable = CONFIG.is_stable

  public get_version_string(): string{
    if(this.is_stable)
      return 'stable'
    return this.version
  }

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\""+this.cdn+"/latest/drugstone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.cdn+"/latest/styles.css\">\n" +
        "</head>'"
    this.versionCode="<head>\n" +
        "   <script src=\""+this.cdn+"/"+this.get_version_string()+"/drugstone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.cdn+"/"+this.get_version_string()+"/styles.css\">\n" +
        "</head>'"
    this.nightlyCode="<head>\n" +
        "   <script src=\""+this.cdn+"/cdn/nightly/drugstone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.cdn+"/cdn/nightly/styles.css\">\n" +
        "</head>'"
  }

}
