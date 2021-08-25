import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import themes from '../../../../themes.json'
// @ts-ignore
import config from '../../../../standaloneConfig.json'
// // @ts-ignore
// import network from '../../../../exampleNetwork.json'

@Component({
    selector: 'app-standalone',
    templateUrl: './standalone.component.html',
    styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

    network: Object = {nodes:[], edges:[]}
    theme: Object = {}
    config: Object = {}


    rawNodes = ""
    rawEdges = ""
    public group = "gene"
    private delimList = ["\t", "\n", ",", ";", " "]

    constructor() {
    }

    ngOnInit(): void {
        this.theme = themes.integrated;
        // this.network = network
        this.config = config
    }

    setNodes(): void {
        let delim = ","
        let min = 0;
        this.delimList.forEach(d => {
            let count = this.countOccs(this.rawNodes, d)
            if (count > min) {
                min = count;
                delim = d;
            }
        })
        // @ts-ignore
        const jsonData = this.rawNodes.split(delim).map(entry => {
            let name = entry.trim()
            return {id: name, group: this.group, label: name}
        })
        this.network = {nodes: jsonData, edges: []}
    }

    setEdges(): void {
        console.log("not implemented yet")
    }

    countOccs(text: string, d: string) {
        return text.split(d).length;
    }


}
