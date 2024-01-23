import {Component, Input, OnInit} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() public version = ""

  constructor(public themeService: ThemeService) { }

  public get_version_string(): string{
    let pat = new RegExp('[0-9]')
    if(pat.test(this.version.charAt(0)))
      return "v"+this.version
    return this.version
  }

  ngOnInit(): void {
  }

}
