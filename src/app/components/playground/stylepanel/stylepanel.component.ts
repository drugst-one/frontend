import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stylepanel',
  templateUrl: './stylepanel.component.html',
  styleUrls: ['./stylepanel.component.scss']
})
export class StylepanelComponent implements OnInit {

  @Input() public code :string = ":root{\n}"

  constructor() { }

  ngOnInit(): void {
  }

}
