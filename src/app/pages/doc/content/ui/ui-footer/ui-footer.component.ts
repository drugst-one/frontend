import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss']
})
export class UiFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
