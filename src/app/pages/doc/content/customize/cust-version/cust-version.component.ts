import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cust-version',
  templateUrl: './cust-version.component.html',
  styleUrls: ['./cust-version.component.scss']
})
export class CustVersionComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Input() version = ""
  @Input() server = ""
  @Input() api = ""
  basicCode = ""
  versionCode= ""
  nightlyCode = ""
  constructor() { }

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\""+this.api+"/cdn/latest/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.api+"/cdn/latest/styles.css\">\n" +
        "</head>"
    this.versionCode="<head>\n" +
        "   <script src=\""+this.api+"/cdn/"+this.version+"/"+this.server+"/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.api+"/cdn/"+this.version+"/"+this.server+"/styles.css\">\n" +
        "</head>"
    this.nightlyCode="<head>\n" +
        "   <script src=\""+this.api+"/cdn/nightly/"+this.server+"/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.api+"/cdn/nightly/"+this.server+"/styles.css\">\n" +
        "</head>"
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
