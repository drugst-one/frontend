import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import config from '../../../exampleConfig.json';
// @ts-ignore
import network from '../../../exampleNetwork.json';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
    @Input() public theme = {}
    public config = config
    public blankNodeGroup = {
        "type": "someType",
        "color": "#e900f5",
        "font": {"color": "#f0f0f0"},
        "groupName": "someName",
        "shape": "circle"
    }
    public blankEdgeGroup = {"groupName": "someName", "color": "#e900f5", "dashes": false}
    public network = network;
    public id = "example-drugst.one"
    public code: string = "";
    public style: string = "";

    constructor() {
        this.updateCode();
    }

    ngOnInit(): void {
    }

    fit(): void {
        this.changeConfig({"showLegend": this.config["showLegend"] || this.config["showLegend"] == null})
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
        let colors = JSON.stringify(Object.keys(this.theme).map(key => {
            let o = {}
            // @ts-ignore
            o[key] = this.theme[key].color;
            return o
        }));
        this.style = ":root {\n" + colors.split("},").join(";\n   ").split("\"").join("").split("{").join("").replace("[", "   ").replace("]", "").replace("}", "\n}")
    }

    changeConfig(change: object) {
        Object.keys(change).forEach(name => {
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
            this.theme[key].color = change[key]
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
