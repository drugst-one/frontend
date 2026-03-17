import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-impl-git',
  templateUrl: './impl-git.component.html',
  styleUrls: ['./impl-git.component.scss']
})
export class ImplGitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
