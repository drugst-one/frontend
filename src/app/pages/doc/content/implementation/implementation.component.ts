import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.scss']
})
export class ImplementationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
