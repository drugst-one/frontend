import {Component, Input, OnInit} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { CommonModule } from '@angular/common';
import { CodeComponent } from '../../code/code.component';

@Component({
  selector: 'app-stylepanel',
  templateUrl: './stylepanel.component.html',
  styleUrls: ['./stylepanel.component.scss'],
  standalone: true,
  imports: [CommonModule, CodeComponent]
})
export class StylepanelComponent implements OnInit {

  @Input() public code :string = ":root{\n}"

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
