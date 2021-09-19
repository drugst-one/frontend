import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Clipboard} from "@angular/cdk/clipboard";


@Component({
  selector: 'app-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss']
})
export class DocContentComponent implements OnInit {

  @Input() entry: MenuItem = {}
  @Input() divider: boolean = false

  constructor(private clipboard:Clipboard) { }

  toClipboard(): void {
    let entryPath = window.location.href.split('#')[0]+"#"+this.entry.id;
    window.location.href = entryPath
    this.clipboard.copy(entryPath)
  }

  ngOnInit(): void {
  }

}
