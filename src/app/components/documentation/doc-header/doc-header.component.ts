import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-header',
  templateUrl: './doc-header.component.html',
  styleUrls: ['./doc-header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DocHeaderComponent implements OnInit {

  constructor() { }

  @Input() text: string = ''
  @Input() id: string = ''

  ngOnInit(): void {
  }

}
