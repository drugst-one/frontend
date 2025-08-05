import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../../../../services/requestService";

@Component({
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

  async getEULA(){
    this.drugstone.getEULA(this.api).then(response=>{
      if(response.license)
        return response.license
    }).then(license=>{
      this.license = this.format_license_string(license)
    })
  }

  format_license_string(license: string) {
    const license_array = [];
    let header_started = false;
    let after_header = false;
    license = license.replace('\n', ' <br> ')
    for (let e of license.split(' ')) {
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
        case '':
          continue;
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
