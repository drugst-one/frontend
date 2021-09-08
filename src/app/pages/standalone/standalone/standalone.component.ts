import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import themes from '../../../../themes.json'
// @ts-ignore
import configDark from '../../../../standaloneConfigDark.json';
// @ts-ignore
import configLight from '../../../../standaloneConfigLight.json'

@Component({
    selector: 'app-standalone',
    templateUrl: './standalone.component.html',
    styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

    @ViewChild("standalonePlugin", {static: false}) standalonePluginEl: ElementRef | undefined;

    network: Object = {nodes:[], edges:[]}
    themeLight: Object = {}
    themeDark : Object = {}
    theme : Object = {}
    config: Object = {}
    configDark: Object={}
    configLight: Object={}

    panelNWCollapsed= false;
    panelDRGSTNCollapsed = true;

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
        this.themeLight = themes["integrated-light"];
        this.themeDark = themes["integrated-dark"];
        // @ts-ignore
        this.themeLight['--drgstn-background'] = this.themeLight[['--drgstn-panel']]
        // @ts-ignore
        this.themeDark['--drgstn-background'] = this.themeDark[['--drgstn-panel']]
        this.theme = this.themeLight;
        this.configLight = configLight
        this.configDark = configDark
        this.config = this.configLight
    }

    ngAfterViewInit():void{
        if (localStorage.getItem("darkTheme")==="true")
            this.switchTheme(true)
    }

    setNodes(): Object[] {
        if(this.rawNodes.length===0)
            return []
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
        return this.rawNodes.split(delim).map(entry => {
            let name = entry.trim()
            return {id: name, group: this.group, label: name}
        })
    }

    setEdges(): Object[] {
        if(this.rawEdges.length===0)
            return []
        let delim = ","
        let min = 0;
        this.delimList.forEach(d => {
            if(d === "\n")
                return
            let count = this.countOccs(this.rawEdges, d)
            if (count > min) {
                min = count;
                delim = d;
            }
        })
        return this.rawEdges.split("\n").map(line=> {
            let pair = line.split(delim)
            // let name = entry.trim()
            return {from: pair[0].trim(), to:pair[1].trim()}
        })
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


    setNetwork() {
        let nodes = this.setNodes()
        let edges = this.setEdges()
        this.network = {nodes: nodes, edges: edges}

        this.panelNWCollapsed=true;
        this.panelDRGSTNCollapsed = false;
    }

    setObject(dest: Object, src: Object){
        Object.keys(src).forEach(key=>{
            // @ts-ignore
            dest[key]=src[key];
        })
    }

    switchTheme(dark:boolean){
        let theme = dark? this.themeDark : this.themeLight
        Object.keys(theme).forEach(key=>{
            // @ts-ignore
            this.standalonePluginEl?.nativeElement.style.setProperty(key, theme[key])
        })
        this.config = dark ? this.configDark : this.configLight;
    }
}
