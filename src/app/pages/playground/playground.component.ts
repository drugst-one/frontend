import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {


    public config = {
        nodeGroups: {
            "0.5": {"type": "gene", "color": "#CCFF33FF", "groupName": "0.5", "shape": "star"},
            "1.5": {"type": "gene", "color": "#66FF33FF", "groupName": "1.5", "shape": "circle"},
            "2.0": {"type": "gene", "color": "#33CC33FF", "groupName": "2.0", "shape": "circle"},
            "patient_group": {"type": "gene", "color": "#FF0000FF", "groupName": "-2.0", "shape": "circle"}
        },
        edgeGroups: {"normal": {"color": "black", "groupName": "Custom Group"}, "dashed":{"color":"#000857", "groupName":"Dashed", "dashes":[3,2]}},
        identifier: "uniprot",
        legendUrl: "https://exbio.wzw.tum.de/covex/assets/leg1.png"
    }
    public blankNodeGroup = {"type": "someType", "color": "#e900f5", "groupName": "someName", "shape": "circle"}
    public blankEdgeGroup ={"groupName":"someName", "color":"#e900f5", "dashes":false}
    public network = {
        "nodes": [{"id": "TP53", "group": "0.5"}, {"id": "C5", "group": "0.5"}, {
            "id": "Patient",
            "group": "patient_group"
        }, {"label": "PTEN", "id": "PTEN", "group": 0.5}],
        "edges": [{from:"TP53", to:"C5", group:"dashed"},{from:"TP53", to:"PTEN", group:"dashed"},{from:"Patient", to:"C5", group:"normal"},{from:"Patient", to:"PTEN", group:"normal"}]
    }
    public id = "drugstone-panel-1"
    public code: string = "";

    constructor() {
        this.updateCode();
    }

    ngOnInit(): void {
    }

    updateCode(): void {
        this.code = "<network-expander\n   id=\'" + this.id + "\'\n   config=\'" + JSON.stringify(this.config) + "\'\n   network=\'" + JSON.stringify(this.network) + "\'>\n</network-expander>"
    }

    changeConfig(change: object) {
        Object.keys(change).forEach(name => {
            // @ts-ignore
            console.log("changing " + name + " from " + this.config[name] + " to " + (typeof change[name] === "object" ? JSON.stringify(change[name]) : change[name]))
            // @ts-ignore
            this.config[name] = change[name];
        })
        this.updateCode()
    }


    changeColor(change: object) {
        //TODO find method to change design colors
    }

    editGroup(event: object){
        Object.keys(event).forEach(key=>{
            if(key==='add')
                { // @ts-ignore
                    this.newGroup(event[key])
                }
            if(key==='delete'){
                // @ts-ignore
                this.deleteGroup(event[key])
            }
        })
        this.updateCode()
    }

    deleteGroup(params: object){
        // @ts-ignore
        if(params.type==='node'){
            // @ts-ignore
            delete this.config.nodeGroups[params.id]
        }else{
            // @ts-ignore
            delete this.config.edgeGroups[params.id]
        }
    }

    newGroup(group: string) {
        let id = "new_group_"
        if (group === 'node') {
            let i = 1;
            // @ts-ignore
            while (this.config.nodeGroups[id + i]) {
                i++
            }
            // @ts-ignore
            this.config.nodeGroups[id + i] = {...this.blankNodeGroup}

        }else{
            let i = 1;
            // @ts-ignore
            while (this.config.edgeGroups[id + i]) {
                i++
            }
            // @ts-ignore
            this.config.edgeGroups[id + i] = {...this.blankEdgeGroup}
        }
    }
}
