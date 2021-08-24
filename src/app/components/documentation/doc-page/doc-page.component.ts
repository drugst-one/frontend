import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent implements OnInit {

  @Input() id: number = 0
  @Input() currentPage : number = 0
  @Input() navTree : any = {}

  public title = ""

  constructor() {
  }

  ngOnInit(): void {
    this.navTree= this.navTree[this.id]
    console.log(this.navTree)
    this.title = this.navTree.label


  }

}
