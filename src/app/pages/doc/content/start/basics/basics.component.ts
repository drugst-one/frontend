import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  constructor() { }
  @Output() navigate = new EventEmitter<string>();
  @Input() api : string= "";
  basicCode= ""

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\""+this.api+"cdn/latest/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\""+this.api+"/cdn/latest/styles.css\">\n" +
        "</head>'"
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
