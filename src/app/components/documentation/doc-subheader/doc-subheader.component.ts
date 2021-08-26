import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-subheader',
  templateUrl: './doc-subheader.component.html',
  styleUrls: ['./doc-subheader.component.scss']
})
export class DocSubheaderComponent implements OnInit {

  constructor() { }

  @Input() text: string = ''
  @Input() id: string = ''

  ngOnInit(): void {
  }

}
