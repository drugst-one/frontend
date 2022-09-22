import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-git-link',
  templateUrl: './git-link.component.html',
  styleUrls: ['./git-link.component.scss']
})
export class GitLinkComponent implements OnInit {

  @Input() link : string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
