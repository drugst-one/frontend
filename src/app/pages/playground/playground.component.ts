import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    public config = {
        nodeGroups: {
            "0.5": {"type": "gene", "color": "rgb(204, 255, 51)", "name": "0.5", "shape": "circle"},
            "1.5": {"type": "gene", "color": "rgb(102, 255, 51)", "name": "1.5", "shape": "circle"},
            "2.0": {"type": "gene", "color": "rgb(51, 204, 51)", "name": "2.0", "shape": "circle"},
            "-2.0": {"type": "gene", "color": "rgb(255, 0, 0)", "name": "-2.0", "shape": "circle"}
        }, edgeGroups: {"custom": {"color": "black", "name": "Custom Group"}}, "identifier": "symbol",
        legendUrl: "https://exbio.wzw.tum.de/covex/assets/leg1.png"
    }
    public network = {
        "nodes": [{"id": "TP53", "group": "0.5"}, {"id": "C5", "group": "0.5"}, {"id": "Patient", "group": "patient_group"}, {"label": "PTEN", "id": "PTEN", "group": 0.5}],
        "edges": []
    }
        public id = "drugstone-panel-1"
    public code: string ="";

    constructor() {
        this.updateCode();
    }

    ngOnInit(): void {
    }

    updateCode():void{
        this.code="<network-expander\n   id=\'"+this.id+"\'\n   config=\'"+JSON.stringify(this.config)+"\'\n   network=\'"+JSON.stringify(this.network)+"\'>\n</network-expander>"
    }

    changeConfig(change: object) {
        Object.keys(change).forEach(name=>{
            // @ts-ignore
            console.log("changing "+name+" from "+this.config[name]+" to "+change[name])
            // @ts-ignore
            this.config[name]=change[name];
        })
        this.updateCode()
    }


}
