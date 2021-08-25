import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent implements OnInit {

  @Input() pageId: number = 0
  @Input() currentPage : number = 0
  @Input() navTree : any = {}
  id: String = ""

  public title = ""

  constructor() {
  }

  ngOnInit(): void {
    this.navTree= this.navTree[this.pageId]
    this.title = this.navTree.label
    this.id = this.navTree.id


  }

}
