import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExampleConfig } from 'src/interfaces';
// @ts-ignore
import cystic_fibrosis_example from './config/cystic_fibrosis.json';
// @ts-ignore
import ibd_example from './config/inflammatory_bowel_disease.json';
// @ts-ignore
import default_example from './config/default.json';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() activateExampleEvent = new EventEmitter<ExampleConfig>();

  public drugstOneExamples: ExampleConfig[] = [
    default_example,
    cystic_fibrosis_example,
    ibd_example
  ];

  public changeDrugstOneExample($event: string) {
    for (const example of this.drugstOneExamples) {
      if (example.value === $event) {
        this.activateExample(example);
      }
    }
  }

  public activateExample(example: ExampleConfig) {
    // @ts-ignore
    this.activateExampleEvent.emit(example)
  }

}
