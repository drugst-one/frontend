import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestService} from "../../../services/requestService";
import {Node} from "../../../interfaces"
@Component({
  selector: 'app-motivation ',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {
  @Output() tabChangeEvent = new EventEmitter<number>();
  @Output() navigateDoc = new EventEmitter<string>();
  @Input() api = ""
  @Input() public serverVersion = ""
  @Input() public version = ""
  @Input() public theme = {}
  sourceDBList = [{label:'Symbol', value:'symbol'},{label:'UniProt', value:'uniprot'},{label:'Ensemble', value:'ensg'}];
  sourceDB = 'symbol'
  availability:object = {}

  public general = {
    plugin: "",
    body: ""
  };

  constructor(public netex: RequestService) {
  }

  ngOnInit(): void {
    this.general.plugin = "" +
        "<head>\n" +
        "   <script src=\"https://cdn.jsdelivr.net/gh/AndiMajore/drugstone-releases@"+this.version+"/"+this.serverVersion+"/drugsTone.js\"></script>\n" +
        "   <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/AndiMajore/drugstone-releases@"+this.version+"/"+this.serverVersion+"/styles.css\">\n" +
        "</head>\n\n";
    this.general.body = "" +
        "<body>\n" +
        "   <network-expander></network-expander>\n" +
        "</body>\n"
  }

  tabChange(number: number) {
    this.tabChangeEvent.emit(number)
  }

  checkAvailability(sourceDB: string, $event: string) {
      this.netex.mapNodes(this.api,[({id:$event} as Node)],sourceDB).then(response=>{
        this.availability = response[0]
        console.log(this.availability)
      })
  }

  getElement(map: object, key:string){
    // @ts-ignore
    return map[key]
  }

  switchToDoc(docPage: string) {
    this.navigateDoc.emit(docPage)
  }

  getKeys(map: object){
    return Object.keys(map)
  }

  getTheme() {
    let colors = JSON.stringify(Object.keys(this.theme).map(key => {
      let o = {}
      // @ts-ignore
      o[key] = this.theme[key].color;
      return o
    }));
    return ":root {\n" + colors.split("},").join(";\n   ").split("\"").join("").split("{").join("").replace("[", "   ").replace("]", "").replace("}", ";\n}").split(":").join(": ")

  }
}
