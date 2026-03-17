import { CommonModule } from "@angular/common";
import { CodeComponent } from "../../../../../components/code/code.component";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, CodeComponent],
  selector: 'app-django',
  templateUrl: './django.component.html',
  styleUrls: ['./django.component.scss']
})
export class DjangoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
