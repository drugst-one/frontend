import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() public lang: string = "";
  @Input() public code: string  = "";

  constructor() { }

  ngOnInit(): void {
  }

}
