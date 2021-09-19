import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() tabChangeEvent = new EventEmitter<number>();
  @Output() navigateDoc = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  switchTab(dest:number):void{
    this.tabChangeEvent.emit(dest)
  }

  switchToDoc(docPage: string) {
    this.navigateDoc.emit(docPage)
  }

    isDark() {
        return localStorage.getItem("darkTheme") === 'true';
    }
}
