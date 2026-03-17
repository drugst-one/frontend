import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ToolsBannerComponent } from '../../components/other/tools-banner/tools-banner.component';

@Component({
  selector: 'app-call-landing',
  templateUrl: './call-landing.component.html',
  styleUrls: ['./call-landing.component.scss'],
  standalone: true,
  imports: [CommonModule, DividerModule, ToolsBannerComponent]
})
export class CallLandingComponent implements OnInit {

  @Input() theme = {};
  @Input() api = "";

  constructor() { }

  ngOnInit(): void {
  }

}
