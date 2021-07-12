import {EventEmitter, Output} from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-datapanel',
    templateUrl: './datapanel.component.html',
    styleUrls: ['./datapanel.component.scss']
})
export class DatapanelComponent implements OnInit {

    @Input() public nodeGroups = {}
    @Output() public setNodesEvent = new EventEmitter<Object[]>()
    public rawData = ""
    public jsonData = []
    public jsonString = "[]"
    public group = "default"
    private delimList = ["\t", "\n", ",", ";", " "]

    constructor() {
    }

    ngOnInit(): void {
    }

    convertToJson() {
        let delim = ","
        let min = 0;
        this.delimList.forEach(d => {
            let count = this.countOccs(this.rawData, d)
            if (count > min) {
                min = count;
                delim = d;
            }
        })
        // @ts-ignore
        this.jsonData = this.rawData.split(delim).map(entry => {
            let name = entry.trim()
            return {id: name, group: this.group, label:name}
        })
        this.jsonString = JSON.stringify(this.jsonData)
    }

    getNodeGroupList() {
        return Object.entries(this.nodeGroups).map(entry => {
                // @ts-ignore
            return {label: entry[1].groupName, value: entry[0]}
            }
        )
    }

    countOccs(text: string, d: string) {
        return text.split(d).length;
    }

    setNodes() {
        this.setNodesEvent.emit(this.jsonData)
    }
}
