import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-from-scratch',
  templateUrl: './from-scratch.component.html',
  styleUrls: ['./from-scratch.component.scss']
})
export class FromScratchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
