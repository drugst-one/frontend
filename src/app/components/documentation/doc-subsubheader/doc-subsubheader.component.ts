import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-subsubheader',
  templateUrl: './doc-subsubheader.component.html',
  styleUrls: ['./doc-subsubheader.component.scss']
})
export class DocSubsubheaderComponent implements OnInit {

  constructor() { }

  @Input() text: string = ''
  @Input() id: string = ''

  ngOnInit(): void {
  }

}
