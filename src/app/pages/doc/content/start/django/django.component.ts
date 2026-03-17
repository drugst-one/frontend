import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-django',
  templateUrl: './django.component.html',
  styleUrls: ['./django.component.scss']
})
export class DjangoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
