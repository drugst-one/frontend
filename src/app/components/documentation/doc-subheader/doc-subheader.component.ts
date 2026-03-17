import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitLinkComponent } from '../../../pages/doc/elements/git-link/git-link.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-doc-subheader',
  templateUrl: './doc-subheader.component.html',
  styleUrls: ['./doc-subheader.component.scss'],
  standalone: true,
  imports: [CommonModule, GitLinkComponent, ButtonModule, RippleModule, TooltipModule]
})
export class DocSubheaderComponent implements OnInit {

  constructor() { }

  @Input() text: string = ''
  @Input() id: string = ''
  @Input() link: string=''
  @Input() python: boolean=false


  ngOnInit(): void {
  }

}
