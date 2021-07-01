import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drugstonepanel',
  templateUrl: './drugstonepanel.component.html',
  styleUrls: ['./drugstonepanel.component.scss']
})
export class DrugstonepanelComponent implements OnInit {

  @Input() public config:object = {}
  @Input() public network: object = {}
  @Input() public id: string = ""
  @Input() public theme = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  getConfig(): string{
    return JSON.stringify(this.config)
  }

  getNetwork(): string{
    return JSON.stringify(this.network)
  }

  getTheme(): string{
    return JSON.stringify(this.theme)
  }

}
