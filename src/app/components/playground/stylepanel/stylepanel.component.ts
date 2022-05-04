import {Component, Input, OnInit} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-stylepanel',
  templateUrl: './stylepanel.component.html',
  styleUrls: ['./stylepanel.component.scss']
})
export class StylepanelComponent implements OnInit {

  @Input() public code :string = ":root{\n}"

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
