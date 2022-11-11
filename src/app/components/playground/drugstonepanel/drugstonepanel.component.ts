import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drugstonepanel',
  templateUrl: './drugstonepanel.component.html',
  styleUrls: ['./drugstonepanel.component.scss']
})
export class DrugstonepanelComponent implements OnInit {

  @Input() public config:object = {}
  @Input() public network: object = {}
  @Input() public groups: object ={ nodeGroups:{}}
  @Input() public id: string = ""

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

  getGroups(): string{
    return JSON.stringify(this.groups)
  }

}
