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
  basicCode = ""
  versionCode= ""
  nightlyCode = ""
  constructor() { }

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\"http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/latest/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/latest/styles.css\">\n" +
        "</head>'"
    this.versionCode="<head>\n" +
        "   <script src=\"http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/"+this.version+"/"+this.server+"/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/"+this.version+"/"+this.server+"/styles.css\">\n" +
        "</head>'"
    this.nightlyCode="<head>\n" +
        "   <script src=\"http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/nightly/"+this.server+"/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/nightly/"+this.server+"/styles.css\">\n" +
        "</head>'"
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
