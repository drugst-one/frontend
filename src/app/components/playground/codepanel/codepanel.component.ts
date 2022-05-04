import {Component, Input, OnInit} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-codepanel',
  templateUrl: './codepanel.component.html',
  styleUrls: ['./codepanel.component.scss']
})
export class CodepanelComponent implements OnInit {


  @Input() public code :string = "<network-expander>\n</network-expander>"
  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }
}
