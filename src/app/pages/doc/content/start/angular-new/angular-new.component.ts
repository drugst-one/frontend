import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CodeComponent} from "../../../../../components/code/code.component";

@Component({
  selector: 'app-angular-new',
  standalone: true,
  imports: [CommonModule, CodeComponent],
  templateUrl: './angular-new.component.html',
  styleUrl: './angular-new.component.scss',
})
export class AngularNewComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  moduleCode = "import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';\n" +
      "import { CommonModule } from '@angular/common';\n"+
      "@Component({\n" +
      "   selector: 'app-drugstone-component',\n" +
      "   templateUrl: './drugstone-component.component.html',\n" +
      "   styleUrls: ['./drugstone-component.component.scss'],\n" +
      "   standalone: true,\n" +
      "   imports: [CommonModule],\n" +
      "   schemas: [CUSTOM_ELEMENTS_SCHEMA],\n" +
      "})"
  constructor() { }

  ngOnInit(): void {
  }
}
