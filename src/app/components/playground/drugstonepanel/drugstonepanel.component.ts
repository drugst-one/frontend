import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drugstonepanel',
  templateUrl: './drugstonepanel.component.html',
  styleUrls: ['./drugstonepanel.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
    let clean = {...this.config};
    const datasets = ['interactionProteinProtein', 'interactionDrugProtein', 'associatedProteinDisorder', 'indicationDrugDisorder'];
    datasets.forEach(key => {
        // @ts-ignore
        if (clean[key] && typeof clean[key] === 'string') {
            // @ts-ignore
            clean[key] = clean[key].split('|')[0];
        }
    });
    return JSON.stringify(clean)
  }

  getNetwork(): string{
    return JSON.stringify(this.network)
  }

  getGroups(): string{
    return JSON.stringify(this.groups)
  }

}
