import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-ui-analysis',
  templateUrl: './ui-analysis.component.html',
  styleUrls: ['./ui-analysis.component.scss']
})
export class UiAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
