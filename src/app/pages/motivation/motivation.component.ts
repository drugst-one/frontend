import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestService} from "../../services/requestService";
import {Node} from "../../../interfaces"

// @ts-ignore
import CONFIG from "../../configs/default.js"
@Component({
  selector: 'app-motivation ',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {
  @Output() tabChangeEvent = new EventEmitter<number>();
  @Output() navigateDoc = new EventEmitter<string>();
  @Input() api = ""
  @Input() host = ""
  @Input() cdn = ""
  @Input() public theme = {}
  sourceDBList = [{label:'Symbol', value:'symbol'},{label:'UniProt', value:'uniprot'},{label:'Ensemble', value:'ensg'}, {label:'Entrez', value:'entrez'}];
  sourceDB = 'symbol'
  availability:object = {}

  is_stable = CONFIG.is_stable

  public general = {
    plugin: "",
    body: ""
  };

  constructor(public netex: RequestService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    // document.scrollTop(0);
    window.scroll({top:document.body.offsetTop})
    if(!this.is_stable) {
      this.general.plugin = "" +
          "<head>\n" +
          "   <script src=\"" + this.cdn + "/latest/drugstone.js\"></script>\n" +
          "   <link rel=\"stylesheet\" href=\"" + this.cdn + "/latest/styles.css\">\n" +
          "</head>\n\n";
    }else{
      this.general.plugin = "" +
          "<head>\n" +
          "   <script src=\"" + this.cdn + "/stable/drugstone.js\"></script>\n" +
          "   <link rel=\"stylesheet\" href=\"" + this.cdn + "/stable/styles.css\">\n" +
          "</head>\n\n";
    }
    this.general.body = "" +
        "<body>\n" +
        "   <drugst-one></drugst-one>\n" +
        "</body>\n"
  }

  tabChange(number: number) {
    this.tabChangeEvent.emit(number)
  }

  checkAvailability(sourceDB: string, $event: string) {
      this.netex.mapNodes(this.api,[({id:$event} as Node)],sourceDB).then(response=>{
        this.availability = response[0]
      })
  }

  getElement(map: object, key:string){
    // @ts-ignore
    return map[key]
  }

  switchToDoc(docPage: string) {
    window.location.replace("/doc#"+docPage)
    // this.navigateDoc.emit(docPage)
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
    return ":root {\n" + colors.split("},").join(";\n   ").split("\"").join("").split("{").join("").replace("[", "   ").replace("]", "").replace("}", ";\n}").split(":").join(": ").replace("\n   ;\n","\n")

  }
}
