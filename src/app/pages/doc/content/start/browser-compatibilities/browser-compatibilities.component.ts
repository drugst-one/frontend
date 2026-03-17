import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-browser-compatibilities',
  templateUrl: './browser-compatibilities.component.html',
  styleUrls: ['./browser-compatibilities.component.scss']
})
export class BrowserCompatibilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
