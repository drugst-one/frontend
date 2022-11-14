import { Component, OnInit } from '@angular/core';

@Component({
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
