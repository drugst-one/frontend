import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() public headerIcon : string ="";
  @Input() public title: string ="";
  @Input() public collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
