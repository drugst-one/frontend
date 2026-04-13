import { MessageModule } from "primeng/message";
import { CommonModule } from "@angular/common";
import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../../../../services/requestService";

@Component({
  standalone: true,
  imports: [CommonModule, MessageModule],
  selector: 'app-eula',
  templateUrl: './eula.component.html',
  styleUrls: ['./eula.component.scss']
})
export class EulaComponent implements OnInit {


  @Input() api: string = ''

  license: string = ''

  constructor(public drugstone: RequestService) { }

  ngOnInit(): void {
    this.getEULA()
  }

  async getEULA() {
    try {
      const response = await this.drugstone.getEULA(this.api);
      // The backend returns an object with a "license" property.
      // If it returns just the string, we handle that as well.
      const licenseRaw = (response && response.license) ? response.license : response;
      if (typeof licenseRaw === 'string') {
        this.license = this.format_license_string(licenseRaw);
      }
    } catch (error) {
      console.error('Error fetching EULA:', error);
    }
  }

  format_license_string(license: string) {
    if (!license) {
      return '';
    }
    const license_array = [];
    let header_started = false;
    let after_header = false;
    // Fix: replace ALL newlines with <br> and ensure spaces around them for easier splitting
    license = license.split('\n').join(' <br> ')

    for (let e of license.split(' ')) {
      // Ignore empty tokens from consecutive spaces
      if (e === '') {
        continue;
      }

      switch (e) {
        case '====':
          if (!header_started) {
            header_started = true
            e = '<h1 class="title">'
            break;
          } else {
            header_started = false;
            e = '</h1>';
            after_header = true;
            break;
          }
        case '<br>':
          if (after_header) {
            // ignore linebreaks after header, header has own margin
            continue;
          }
          break;
        default:
          // as soon as any text appears, integrate linebreaks again
          after_header = false;
          break;
      }
      license_array.push(e)
    }
    return license_array.join(' ');
  }

}
