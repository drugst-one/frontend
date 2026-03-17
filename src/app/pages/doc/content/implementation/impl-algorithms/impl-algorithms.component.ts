import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ThemeService } from 'src/app/services/theme.service';
import { DocSubsubheaderComponent } from "../../../../../components/documentation/doc-subsubheader/doc-subsubheader.component";

@Component({
  standalone: true,
  imports: [CommonModule, DocSubsubheaderComponent],
  selector: 'app-impl-algorithms',
  templateUrl: './impl-algorithms.component.html',
  styleUrls: ['./impl-algorithms.component.scss']
})
export class ImplAlgorithmsComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
