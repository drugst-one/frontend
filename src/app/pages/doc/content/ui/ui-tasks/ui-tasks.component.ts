import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-ui-tasks',
  templateUrl: './ui-tasks.component.html',
  styleUrls: ['./ui-tasks.component.scss']
})
export class UiTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
