import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-drugstone-dream-features',
  templateUrl: './drugstone-dream-features.component.html',
  styleUrls: ['./drugstone-dream-features.component.scss']
})
export class DrugstoneDreamFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
