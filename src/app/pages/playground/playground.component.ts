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
            "important": {
                "type": "gene",
                "color": "#ff881f",
                "font": {"color": "#f0f0f0"},
                "groupName": "Important Gene",
                "shape": "star"
            },
            "gene": {
                "type": "gene",
                "color": "#4da300",
                "font": {"color": "#f0f0f0"},
                "groupName": "Gene",
                "shape": "circle"
            },
            "patient": {
                "type": "patient",
                "color": "#000000",
                "font": {"color": "#f0f0f0"},
                "groupName": "Patients",
                "shape": "image",
                "image": "https://icon-library.com/images/patient-icon/patient-icon-28.jpg"
            },
            "phenotype":{
                "type": "gene",
                "color": "#000000",
                "font": {"color": "#f0f0f0"},
                "groupName": "Phenotype",
                "shape": "text"
            }
        },
        edgeGroups: {
            "genotype": {"color": "white", "groupName": "Relevant Gene"},
            "has-phenotype":{"color":"white","groupName": "Has Phenotype", "dashes": [2, 2] },
            "ggi": {"color": "#ffffff", "groupName": "Interaction", "dashes": [3, 2]},
        },
        identifier: "symbol"
    }
    public blankNodeGroup = {
        "type": "someType",
        "color": "#e900f5",
        "font": {"color": "#f0f0f0"},
        "groupName": "someName",
        "shape": "circle"
    }
    public blankEdgeGroup = {"groupName": "someName", "color": "#e900f5", "dashes": false}
    public network = {
        "nodes": [{"id": "patient-1", "group": "patient",x: 242+350, y: 196+250},
            {"id": "patient-2", "group": "patient",x: -115+350, y: -163+250},
            {"id": "patient-3", "group": "patient",x: -255+350, y: 119+250},

            {"id": "ATM","label":"ATM", "group": "gene",x: -61+350, y: -8+250},
            {"id": "BARD1","label":"BARD1", "group": "gene",x: -306+350, y: -1+250},
            {"id": "BRCA1","label":"BRCA1", "group": "gene",x: 116+350, y: 326+250},
            {"id": "BRCA2","label":"BRCA2", "group": "gene",x: 157+350, y: 35+250},
            {"id": "BRIP1","label":"BRIP1", "group": "gene",x: -296+350, y: 224+250},
            {"id": "CHEK2","label":"CHEK2", "group": "gene",x: -134+350, y: 340+250},
            {"id": "CDH1","label":"CDH1", "group": "gene",x: 230+350, y: -307+250},
            {"id": "NF1","label":"NF1", "group": "gene",x: 131+350, y: -139+250},
            {"id": "NBN",label:"NBN", "group": "gene",x: -57, y: 64+250},
            {"id": "PALB2",label:"PALB2", "group": "gene",x: 450, y: -60+250},
            {"id": "PTEN", label:"PTEN","group": "important",x: 305, y: 244+250},
            {"id": "RAD51C", label:"RAD51C", "group": "gene",x: -68+250, y: -340+250},
            {"id": "RAD51D", label:"RAD51D", "group": "gene",x: 368, y: -177+250},
            {"id": "STK11", label:"STK11", "group": "gene",x: 836-250, y: 80+250},
            {"id": "TP53", label:"TP53","group": "important",x: 583-250, y: 66+250},
            {id: "subtype-1",label: "Subtype 1", group: "phenotype",x: 556, y: 21+150},
            {id: "subtype-2",label: "Subtype 2", group: "phenotype",x: -137+50, y: -129+350}],
        "edges": [{from: "BRCA1", to: "BRCA2", group: "ggi"},
            {from: "ATM", to: "BARD1", group: "ggi"},
            {from: "BRCA1", to: "CHEK2", group: "ggi"},
            {from: "RAD51C", to: "RAD51D", group: "ggi"},
            {from: "STK11", to: "TP53", group: "ggi"},
            {from: "TP53", to: "PALB2", group: "ggi"},
            {from: "TP53", to: "RAD51D", group: "ggi"},
            {from: "TP53", to: "NF1", group: "ggi"},
            {from: "TP53", to: "BRCA1", group: "ggi"},
            {from: "TP53", to: "BRCA2", group: "ggi"},
            {from: "PTEN", to: "BRCA1", group: "ggi"},
            {from: "PTEN", to: "BRCA2", group: "ggi"},
            {from: "TP53", to: "PTEN", group: "ggi"},
            {from: "ATM", to: "PTEN", group: "ggi"},
            {from: "CDH1", to: "RAD51D", group: "ggi"},
            {from: "CDH1", to: "PALB2", group: "ggi"},
            {from: "NBN", to: "BRIP1", group: "ggi"},
            {from: "BRIP1", to: "PTEN", group: "ggi"},
            {from: "patient-1", to: "BRCA1", group: "genotype"},
            {from: "patient-1", to: "TP53", group: "genotype"},
            {from: "patient-1", to: "BRCA2", group: "genotype"},
            {from: "patient-1", to: "PTEN", group: "genotype"},
            {from: "patient-2", to: "TP53", group: "genotype"},
            {from: "patient-2", to: "NF1", group: "genotype"},
            {from: "patient-2", to: "BARD1", group: "genotype"},
            {from: "patient-3", to: "TP53", group: "genotype"},
            {from: "patient-3", to: "PTEN", group: "genotype"},
            {from: "patient-3", to: "NBN", group: "genotype"},

            {from: "patient-1", to:"subtype-1", group:"has-phenotype"},
            {from: "patient-2", to:"subtype-1", group:"has-phenotype"},
            {from: "patient-3", to:"subtype-2", group:"has-phenotype"}
        ]
    }
    public id = "drugstone-panel-1"
    public code: string = "";
    public style: string = "";

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
        this.style = ":root {\n" + JSON.stringify(this.theme).split("\",").join(";\n   ").split("\"").join("").replace("{", "   ").replace("}", "") + "\n" + "}"
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
            this.theme[key] = change[key]
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
        let id = "newGroup-"
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
