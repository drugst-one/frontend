import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() tabChangeEvent = new EventEmitter<number>();
  @Output() navigateDoc = new EventEmitter<string>();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  switchTab(dest:string):void{
    this.router.navigate([dest]);
  }

    isDark() {
        return localStorage.getItem("darkTheme") === 'true';
    }
}
