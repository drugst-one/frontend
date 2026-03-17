import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from '../../../../../components/code/code.component';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  standalone: true,
  imports: [CommonModule, CodeComponent]
})
export class AngularComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  moduleCode = "import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';\n" +
      "@NgModule({\n" +
      "   declarations: [],\n" +
      "   imports: [],\n" +
      "   bootstrap: [AppComponent],\n" +
      "   schemas: [CUSTOM_ELEMENTS_SCHEMA],\n" +
      "})"
  constructor() { }

  ngOnInit(): void {
  }

}
