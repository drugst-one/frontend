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
        }, edgeGroups: {"custom": {"color": "black", "name": "Custom Group"}}, "identifier": "hugo",
        legendUrl: "https://exbio.wzw.tum.de/covex/assets/leg1.png"
    }
    public network = {"nodes": [{"Name": "SFTPD", "d": 2.1770573418095793, "color": "rgb(51, 204, 51)", "type": "square", "label": "SFTPD", "x": -0.31956085006193347, "y": -0.7406466643934345, "size": 10, "id": "SFTPD", "group": 1.5, "name": "SFTPD"}, {"Name": "FGG", "d": 3.0919984753400342, "color": "rgb(51, 204, 51)", "type": "square", "label": "FGG", "x": 0.07173702374771213, "y": -0.5272230319152038, "size": 10, "id": "FGG", "group": 1.5, "name": "FGG"}, {"Name": "FGB", "d": 1.7586794205006901, "color": "rgb(51, 204, 51)", "type": "square", "label": "FGB", "x": 0.1862980578421022, "y": -0.5379861465902673, "size": 10, "id": "FGB", "group": 1.5, "name": "FGB"}, {"Name": "CFI", "d": 1.6225326254583097, "color": "rgb(51, 204, 51)", "type": "square", "label": "CFI", "x": 0.6812917849238023, "y": -0.2648075564231581, "size": 10, "id": "CFI", "group": 1.5, "name": "CFI"}, {"Name": "C5", "d": 1.9059032485708656, "color": "rgb(51, 204, 51)", "type": "square", "label": "C5", "x": 0.20310846566736865, "y": -0.14000473240635625, "size": 10, "id": "C5", "group": 1.5, "name": "C5"}, {"Name": "C3", "d": 1.2907638114922122, "color": "rgb(102, 255, 51)", "type": "square", "label": "C3", "x": 0.41046161409628396, "y": -0.22972594268593455, "size": 10, "id": "C3", "group": 1.5, "name": "C3"}, {"Name": "C4BPA", "d": 2.8208380551350274, "color": "rgb(51, 204, 51)", "type": "square", "label": "C4BPA", "x": 0.32691273713760793, "y": -0.44002575152714773, "size": 10, "id": "C4BPA", "group": 1.5, "name": "C4BPA"}, {"Name": "CPB2", "d": 1.7868069138182534, "color": "rgb(51, 204, 51)", "type": "square", "label": "CPB2", "x": 0.005918725090868364, "y": -0.21370077890922853, "size": 10, "id": "CPB2", "group": 1.5, "name": "CPB2"}, {"Name": "FN1", "d": 0.5457280631776094, "color": "rgb(153, 255, 51)", "type": "square", "label": "FN1", "x": 0.10773970106896563, "y": -0.26910493560594656, "size": 10, "id": "FN1", "group": 0.5, "name": "FN1"}, {"Name": "DCN", "d": 0.07523726540508413, "color": "rgb(204, 255, 51)", "type": "square", "label": "DCN", "x": -0.1449109959561148, "y": -0.5406452007869201, "size": 10, "id": "DCN", "group": 0.5, "name": "DCN"}, {"Name": "KRT13", "d": -5.884559807904592, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT13", "x": -0.5462663294859071, "y": 0.2179240739679362, "size": 10, "id": "KRT13", "group": 2.0, "name": "KRT13"}, {"Name": "KRT14", "d": -5.979503966095012, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT14", "x": 0.20723970121617027, "y": 0.3335529310573068, "size": 10, "id": "KRT14", "group": 2.0, "name": "KRT14"}, {"Name": "KRT5", "d": -7.3912122103291935, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT5", "x": 0.001680558082502895, "y": 0.1554556904769493, "size": 10, "id": "KRT5", "group": 2.0, "name": "KRT5"}, {"Name": "KRT6A", "d": -7.364973261442935, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT6A", "x": -0.3511002998605662, "y": 0.3925879058088128, "size": 10, "id": "KRT6A", "group": 2.0, "name": "KRT6A"}, {"Name": "CSTA", "d": -3.8792306737039226, "color": "rgb(255, 0, 0)", "type": "circle", "label": "CSTA", "x": -0.010849204611034656, "y": 0.7467591168222204, "size": 10, "id": "CSTA", "group": 2.0, "name": "CSTA"}, {"Name": "DSP", "d": -1.7563342206781023, "color": "rgb(255, 153, 51)", "type": "circle", "label": "DSP", "x": -0.0678748213735474, "y": 0.39925246533037617, "size": 10, "id": "DSP", "group": -2.0, "name": "DSP"}, {"Name": "PI3", "d": -4.265528188882317, "color": "rgb(255, 0, 0)", "type": "circle", "label": "PI3", "x": 0.031056762567423294, "y": 1.0, "size": 10, "id": "PI3", "group": 2.0, "name": "PI3"}, {"Name": "KRT16", "d": -4.794121223753202, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT16", "x": 0.03152510498669397, "y": 0.06575226291390532, "size": 10, "id": "KRT16", "group": 2.0, "name": "KRT16"}, {"Name": "KRT15", "d": -4.518290478769958, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT15", "x": -0.2895261348950512, "y": 0.2654866500427342, "size": 10, "id": "KRT15", "group": 2.0, "name": "KRT15"}, {"Name": "KRT6B", "d": -5.5864948168835005, "color": "rgb(255, 0, 0)", "type": "circle", "label": "KRT6B", "x": -0.5348816001833466, "y": 0.32709964482335674, "size": 10, "id": "KRT6B", "group": 2.0, "name": "KRT6B"}], "edges": [{"from": "SFTPD", "to": "DCN", "group": "custom"}, {"from": "FGG", "to": "FGB", "group": "custom"}, {"from": "FGG", "to": "FN1", "group": "custom"}, {"from": "FGB", "to": "FN1", "group": "custom"}, {"from": "CFI", "to": "C3", "group": "custom"}, {"from": "C5", "to": "CPB2", "group": "custom"}, {"from": "C5", "to": "C3", "group": "custom"}, {"from": "C3", "to": "FN1", "group": "custom"}, {"from": "C4BPA", "to": "FN1", "group": "custom"}, {"from": "CPB2", "to": "FN1", "group": "custom"}, {"from": "FN1", "to": "KRT5", "group": "custom"}, {"from": "FN1", "to": "KRT16", "group": "custom"}, {"from": "FN1", "to": "DCN", "group": "custom"}, {"from": "KRT13", "to": "KRT6B", "group": "custom"}, {"from": "KRT13", "to": "KRT6A", "group": "custom"}, {"from": "KRT14", "to": "KRT5", "group": "custom"}, {"from": "KRT5", "to": "KRT15", "group": "custom"}, {"from": "KRT5", "to": "KRT16", "group": "custom"}, {"from": "KRT5", "to": "DSP", "group": "custom"}, {"from": "KRT6A", "to": "KRT15", "group": "custom"}, {"from": "KRT6A", "to": "DSP", "group": "custom"}, {"from": "CSTA", "to": "DSP", "group": "custom"}, {"from": "CSTA", "to": "PI3", "group": "custom"}, {"from": "DSP", "to": "KRT16", "group": "custom"}, {"from": "KRT15", "to": "KRT6B", "group": "custom"}]}
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
        console.log(change)
        Object.keys(change).forEach(name=>{
            // @ts-ignore
            console.log("changing "+name+" from "+this.config[name]+" to "+change[name])
            // @ts-ignore
            this.config[name]=change[name];
        })
        this.updateCode()
    }
}
