import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-impl-algorithms',
  templateUrl: './impl-algorithms.component.html',
  styleUrls: ['./impl-algorithms.component.scss']
})
export class ImplAlgorithmsComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
