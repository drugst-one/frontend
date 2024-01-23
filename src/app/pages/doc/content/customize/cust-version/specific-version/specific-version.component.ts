import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-specific-version',
  templateUrl: './specific-version.component.html',
  styleUrls: ['./specific-version.component.scss']
})
export class SpecificVersionComponent implements OnInit {

  @Input() versionCode = ""
  @Input() version = ""
  @Input() nightlyCode = ""

  constructor() { }

  ngOnInit(): void {
  }

}
