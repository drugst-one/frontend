import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { DocSubsubheaderComponent } from "../../../../../components/documentation/doc-subsubheader/doc-subsubheader.component";

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, DocSubsubheaderComponent],
  selector: 'app-standalone-options',
  templateUrl: './standalone-options.component.html',
  styleUrls: ['./standalone-options.component.scss']
})
export class StandaloneOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() navigate = new EventEmitter<string>();

}
