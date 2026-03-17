import { CommonModule } from "@angular/common";
import { DocSubsubheaderComponent } from "../../../../../components/documentation/doc-subsubheader/doc-subsubheader.component";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DocSubsubheaderComponent],
  selector: 'app-ui-panels',
  templateUrl: './ui-panels.component.html',
  styleUrls: ['./ui-panels.component.scss']
})
export class UiPanelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
