import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  constructor() { }
  @Output() navigate = new EventEmitter<string>();
  basicCode= ""

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\"http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/latest/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\http://ml-s-zbhdock2.ad.uni-hamburg.de/cdn/latest/styles.css\">\n" +
        "</head>'"
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
