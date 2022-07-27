import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-header',
  templateUrl: './doc-header.component.html',
  styleUrls: ['./doc-header.component.scss']
})
export class DocHeaderComponent implements OnInit {

  constructor() { }

  @Input() text: string = ''
  @Input() id: string = ''

  ngOnInit(): void {
  }

}
