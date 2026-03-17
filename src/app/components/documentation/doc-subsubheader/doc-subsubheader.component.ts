import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-subsubheader',
  templateUrl: './doc-subsubheader.component.html',
  styleUrls: ['./doc-subsubheader.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DocSubsubheaderComponent implements OnInit {

  constructor() { }

  @Input() text: string = ''
  @Input() id: string = ''

  ngOnInit(): void {
  }

}
