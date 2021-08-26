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

    public dataLists = {
        identifierList: [{label: 'Symbol', value: 'symbol'}, {label: 'UniProt', value: 'uniprot'}, {
            label: 'Ensemble',
            value: 'ensg'
        }],
        drugProtInterList: [{label: 'DrugBank', value: 'DrugBank'}, {label: 'ChEMBL', value: 'ChEMBL'}, {
            label: 'DGIdb',
            value: 'DGIdb'
        }],
        protProtInterList: [{label: 'STRING', value: 'STRING'}, {label: 'BioGRID', value: 'BioGRID'}, {
            label: 'APID',
            value: 'APID'
        }],
    }

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
    getConfig(param: string) {
        // @ts-ignore
        return this.config[param]
    }

    changeConfig(name: string, value: any) {
        let change = {}
        // @ts-ignore
        change[name] = value;
        Object.keys(change).forEach(name => {
            // @ts-ignore
            if (change[name] != null)
                // @ts-ignore
                this.config[name] = change[name];
            else
                // @ts-ignore
                delete this.config[name]
        })
    }


    countOccs(text: string, d: string) {
        return text.split(d).length;
    }


}
