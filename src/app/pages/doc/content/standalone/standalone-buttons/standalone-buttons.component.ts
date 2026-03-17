import { DocSubsubheaderComponent } from "../../../../../components/documentation/doc-subsubheader/doc-subsubheader.component";
import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent, DocSubsubheaderComponent],
  selector: 'app-standalone-buttons',
  templateUrl: './standalone-buttons.component.html',
  styleUrls: ['./standalone-buttons.component.scss']
})
export class StandaloneButtonsComponent implements OnInit {
  public buttonURL = window.location.origin+"/standalone?nodes=PTEN,TP53,BRCA2&autofillEdges=true&activateNetworkMenuButtonAdjacentDrugs=true&interactionDrugProtein=NeDRex&licensedDatasets=true"
  constructor() { }

  ngOnInit(): void {
  }

}
