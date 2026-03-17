import { CommonModule } from "@angular/common";
import { DocSubsubheaderComponent } from "../../../../../components/documentation/doc-subsubheader/doc-subsubheader.component";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DocSubsubheaderComponent],
  selector: 'app-ui-analysis',
  templateUrl: './ui-analysis.component.html',
  styleUrls: ['./ui-analysis.component.scss']
})
export class UiAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
