import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import config from '../../../exampleConfig.json';
// @ts-ignore
import groups from '../../../exampleGroups.json';
// @ts-ignore
import network from '../../../exampleNetwork.json';
// @ts-ignore
import default_example from '../../components/playground/examples/config/default.json';
// @ts-ignore
import * as merge from 'lodash/fp/merge';
import { ExampleConfig } from 'src/interfaces';


@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
    @Input() public theme = {}
    @Input() public api: string = ''
    public config = config;
    public groups = groups;
    public blankNodeGroup = {
        "type": "someType",
        "color": "#e900f5",
        "font": {"color": "#f0f0f0"},
        "groupName": "someName",
        "shape": "circle"
    }
    public blankEdgeGroup = {"groupName": "someName", "color": "#e900f5", "dashes": false}
    public network = network;
    public id = "drugstone-component-id"
    public code: string = "";
    public style: string = "";

    constructor() {
        this.updateCode();
    }

    ngOnInit(): void {
        this.activateExamplePlayground(default_example)
        this.updateCode();
    }

    fit(): void {
        this.changeConfig({"showLegend": this.config["showLegend"] || this.config["showLegend"] == null})
    }

    updateCode(): void {
        let configcpy = {...this.config};
        let groups = {...this.groups};
        Object.keys(this.config).forEach(key => {
            // @ts-ignore
            if (typeof configcpy[key] === "string" && (configcpy[key] == null || configcpy[key].length === 0)) { // @ts-ignore
                delete configcpy[key]
            }
        })
        this.code = "<drugst-one\n   id=\'" + this.id + "\'\n   groups=\'" + JSON.stringify(groups) + "\'\n   config=\'" + JSON.stringify(configcpy) + "\'\n   network=\'" + JSON.stringify(this.network) + "\'>\n</drugst-one>"
        let colors = JSON.stringify(Object.keys(this.theme).map(key => {
            let o = {}
            // @ts-ignore
            if (this.theme[key].color) {
                // @ts-ignore
                o[key] = this.theme[key].color;
                return o
            }
            // @ts-ignore
            o[key] = this.theme[key].value
            return o
        }));
        // colors['--drgstn-font-family'] =
        this.style = ":root {\n" + colors.split("},").join(";\n   ").split("\"").join("").split("{").join("").replace("[", "   ").replace("]", "").replace("}", ";\n}").replace("\n   ;\n", "\n")
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

    changeGroup(change: object) {
        Object.keys(change).forEach(name => {
            // @ts-ignore
            if (change[name] != null)
                // @ts-ignore
                this.groups[name] = change[name];
            else
                // @ts-ignore
                delete this.groups[name]
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

    changeStyle(change: object) {
        Object.keys(change).forEach(key => {
            // @ts-ignore
            this.theme[key].value = change[key]
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
            delete this.groups.nodeGroups[params.id]
        } else {
            // @ts-ignore
            delete this.groups.edgeGroups[params.id]
        }
    }

    newGroup(group: string) {
        let id = "newGroup-"
        if (group === 'node') {
            let i = 1;
            // @ts-ignore
            while (this.groups.nodeGroups[id + i]) {
                i++
            }
            // @ts-ignore
            this.groups.nodeGroups[id + i] = {...this.blankNodeGroup}

        } else {
            let i = 1;
            // @ts-ignore
            while (this.groups.edgeGroups[id + i]) {
                i++
            }
            // @ts-ignore
            this.groups.edgeGroups[id + i] = {...this.blankEdgeGroup}
        }
    }

    setNodes(nodes: object) {
        // @ts-ignore
        this.network.nodes = nodes
        this.updateCode()
    }

    public activateExamplePlayground(example: ExampleConfig) {
        // this.network.edges = [];
        // this.network.nodes = [];
        this.network = undefined;

        this.changeGroup(example.groups);
        this.changeConfig(example.config);
        // this.groups = example.groups;
        this.changeStyle(example.styles);

        // drugstone is removed with *ngIf until network is set
        // start in next cycle to avoid race conditions
        setTimeout(() => {
            this.network = example.network;
            this.updateCode()
        });
    }

}
