import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-git-link',
  templateUrl: './git-link.component.html',
  styleUrls: ['./git-link.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, TooltipModule]
})
export class GitLinkComponent implements OnInit {

  @Input() link : string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
