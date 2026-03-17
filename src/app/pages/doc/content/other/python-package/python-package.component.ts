import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-python-package',
  templateUrl: './python-package.component.html',
  styleUrls: ['./python-package.component.scss']
})
export class PythonPackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
