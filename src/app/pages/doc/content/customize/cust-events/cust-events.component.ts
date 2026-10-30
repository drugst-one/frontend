import { DividerModule } from "primeng/divider";
import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, DividerModule],
  selector: 'app-cust-events',
  templateUrl: './cust-events.component.html',
  styleUrls: ['./cust-events.component.scss']
})
export class CustEventsComponent implements OnInit {

  @Input() api = ""

  readonly configChangeListenerExample = `const drugstone = document.getElementById("drugstone-component-id");

function onAnalysisConfigChange(event) {
    const {version, source, config} = event.detail;
    if (version !== 1) return;

    console.log("Active Drugst.One settings:", source, config);
    // Compare normalized settings and update your host-page UI here.
    // Do not write config back just to mirror an active task or view.
}

drugstone.addEventListener("drugstone-analysis-config-change", onAnalysisConfigChange);`;

  readonly configChangePayloadExample = `{
    "version": 1,
    "source": "task",
    "config": {
        "identifier": "symbol",
        "interactionProteinProtein": "APID",
        "interactionDrugProtein": "NeDRex",
        "licensedDatasets": true,
        "autofillEdges": true,
        "reviewed": false,
        "approvedDrugs": true
    }
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
