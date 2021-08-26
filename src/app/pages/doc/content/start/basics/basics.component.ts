import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  constructor() { }
  @Input() version = ""
  @Input() server = ""
  @Output() navigate = new EventEmitter<string>();
  basicCode= ""

  ngOnInit(): void {
    this.basicCode="<head>\n" +
        "   <script src=\"https://cdn.jsdelivr.net/gh/AndiMajore/drugstone-releases@"+this.version+"/"+this.server+"/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/AndiMajore/drugstone-releases@"+this.version+"/"+this.server+"/styles.css\">\n" +
        "</head>'"
  }

  navigateTo(id:string): void{
    this.navigate.emit(id)
  }

}
