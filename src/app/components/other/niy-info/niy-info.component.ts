import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-niy-info',
  templateUrl: './niy-info.component.html',
  styleUrls: ['./niy-info.component.scss']
})
export class NiyInfoComponent implements OnInit {

  @Input() public pos = "left"

  constructor() { }

  ngOnInit(): void {
  }

}
