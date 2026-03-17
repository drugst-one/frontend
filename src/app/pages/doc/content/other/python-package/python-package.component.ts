import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent],
  selector: 'app-python-package',
  templateUrl: './python-package.component.html',
  styleUrls: ['./python-package.component.scss']
})
export class PythonPackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
