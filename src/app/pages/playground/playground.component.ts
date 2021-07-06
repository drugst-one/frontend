import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
    public theme = {
        '--drgstn-primary': '#347eee',
        '--drgstn-secondary': '#fd6818',
        '--drgstn-success': '#48C774',
        '--drgstn-warning': '#FFDD57FF',
        '--drgstn-danger': '#F14668',
        '--drgstn-background': '#1f2d40',
        '--drgstn-panel': '#1f2d40',
        '--drgstn-info': '#61c43d',
        '--drgstn-text-primary': '#f0f0f0',
        '--drgstn-text-secondary': '#303030',
        '--drgstn-border': 'rgba(255, 255, 255, 0.2)    ',
    }
    public config = {
        nodeGroups: {
            "0.5": {"type": "gene", "color": "#CCFF33FF", "groupName": "0.5", "shape": "star"},
            "1.5": {"type": "gene", "color": "#66FF33FF", "groupName": "1.5", "shape": "circle"},
            "2.0": {"type": "gene", "color": "#33CC33FF", "groupName": "2.0", "shape": "circle"},
            "patientGroup": {"type": "gene", "color": "#FF0000FF", "groupName": "Patients", "shape": "circle"}
        },
        edgeGroups: {
            "normal": {"color": "black", "groupName": "Custom Group"},
            "dashed": {"color": "#000857", "groupName": "Dashed", "dashes": [3, 2]}
        },
        identifier: "symbol",
        legendUrl: "https://exbio.wzw.tum.de/covex/assets/leg1.png"
    }
    public blankNodeGroup = {"type": "someType", "color": "#e900f5", "groupName": "someName", "shape": "circle"}
    public blankEdgeGroup = {"groupName": "someName", "color": "#e900f5", "dashes": false}
    public network = {
        "nodes": [{"id": "TP53", "group": "0.5", x: 4, y: 6}, {"id": "C5", "group": "0.5", x: 6, y: 4}, {
            "id": "Patient",
            "group": "patientGroup"
        }, {"label": "PTEN", "id": "PTEN", "group": 0.5}],
        "edges": [{from: "TP53", to: "C5", group: "dashed"}, {
            from: "TP53",
            to: "PTEN",
            group: "dashed"
        }, {from: "Patient", to: "C5", group: "normal"}, {from: "Patient", to: "PTEN", group: "normal"}]
    }
    public id = "drugstone-panel-1"
    public code: string = "";
    public style:string="";

    constructor() {
        this.updateCode();
    }

    ngOnInit(): void {
    }

    updateCode(): void {
        let configcpy = {...this.config}
        Object.keys(this.config).forEach(key => {
            // @ts-ignore
            if (typeof configcpy[key] === "string" && (configcpy[key] == null || configcpy[key].length === 0)) { // @ts-ignore
                delete configcpy[key]
            }
        })
        this.code = "<network-expander\n   id=\'" + this.id + "\'\n   config=\'" + JSON.stringify(configcpy) + "\'\n   network=\'" + JSON.stringify(this.network) + "\'>\n</network-expander>"
        this.style=":root {\n"+JSON.stringify(this.theme).split("\",").join(";\n   ").split("\"").join("").replace("{","   ").replace("}","")+"\n"+"}"
    }

    changeConfig(change: object) {
        Object.keys(change).forEach(name => {
            // @ts-ignore
            console.log("changing " + name + " from " + this.config[name] + " to " + (typeof change[name] === "object" ? JSON.stringify(change[name]) : change[name]))
            // @ts-ignore
            if (change[name] != null)
                // @ts-ignore
                this.config[name] = change[name];
            else
                // @ts-ignore
                delete this.config[name]
        })
        this.updateCode()
    }


    changeColor(change: object) {
        Object.keys(change).forEach(key => {
            // @ts-ignore
            this.theme[key]=change[key]
            //@ts-ignore
            document.documentElement.style.setProperty(key, change[key])
        })
        this.updateCode()
    }

    editGroup(event: object) {
        Object.keys(event).forEach(key => {
            if (key === 'add') { // @ts-ignore
                this.newGroup(event[key])
            }
            if (key === 'delete') {
                // @ts-ignore
                this.deleteGroup(event[key])
            }
        })
        this.updateCode()
    }

    deleteGroup(params: object) {
        // @ts-ignore
        if (params.type === 'node') {
            // @ts-ignore
            delete this.config.nodeGroups[params.id]
        } else {
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

        } else {
            let i = 1;
            // @ts-ignore
            while (this.config.edgeGroups[id + i]) {
                i++
            }
            // @ts-ignore
            this.config.edgeGroups[id + i] = {...this.blankEdgeGroup}
        }
    }

    setNodes(nodes: object) {
        // @ts-ignore
        this.network.nodes = nodes
        this.updateCode()
    }
}
