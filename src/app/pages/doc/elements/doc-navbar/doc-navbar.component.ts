import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-doc-navbar',
  templateUrl: './doc-navbar.component.html',
  styleUrls: ['./doc-navbar.component.scss']
})
export class DocNavbarComponent implements OnInit {

  @Input() model: MenuItem[] = []
  @Input() selected: number[]=[0]

  @Output() navigationEvent = new EventEmitter<String[]>()

  constructor() { }

  ngOnInit(): void {
  }

}
