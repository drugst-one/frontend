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
  sourceDBList = [{label:'Symbol', value:'symbol'},{label:'UniProt', value:'uniprot'},{label:'Ensemble', value:'ensg'}];
  sourceDB = 'symbol'
  availability:object = {}
  constructor(public netex: RequestService) {
  }

  ngOnInit(): void {
  }

  tabChange(number: number) {
    this.tabChangeEvent.emit(number)
  }

  checkAvailability(sourceDB: string, $event: string) {
      this.netex.mapNodes([({id:$event} as Node)],sourceDB).then(response=>{
        this.availability = response[0]
        console.log(this.availability)
      })
  }

  getElement(map: object, key:string){
    // @ts-ignore
    return map[key]
  }

  getKeys(map: object){
    return Object.keys(map)
  }
}
