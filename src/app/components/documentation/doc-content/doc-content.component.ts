import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss']
})
export class DocContentComponent implements OnInit {

  @Input() entry: MenuItem = {}
  @Input() divider: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
