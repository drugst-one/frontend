import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from '../../../../../../components/code/code.component';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-specific-version',
  templateUrl: './specific-version.component.html',
  styleUrls: ['./specific-version.component.scss'],
  standalone: true,
  imports: [CommonModule, CodeComponent, MessagesModule]
})
export class SpecificVersionComponent implements OnInit {

  @Input() versionCode = ""
  @Input() version = ""
  @Input() nightlyCode = ""

  constructor() { }

  ngOnInit(): void {
  }

}
