import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool-panel',
  templateUrl: './tool-panel.component.html',
  styleUrls: ['./tool-panel.component.scss']
})
export class ToolPanelComponent implements OnInit {

  @Input() label: string = "";
  @Input() link: string = "";
  @Input() icon: string | undefined = undefined
  @Input() font_size: string |undefined= undefined
  @Input() width: number |undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly undefined = undefined;
}
