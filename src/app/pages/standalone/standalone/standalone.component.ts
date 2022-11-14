import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import themes from '../../../../themes.json'
// @ts-ignore
import configDark from '../../../../standaloneConfigDark.json';
// @ts-ignore
import configLight from '../../../../standaloneConfigLight.json'
import {NavigationEnd, Router} from "@angular/router";
import {RequestService} from "../../../services/requestService";
import {ThemeService} from 'src/app/services/theme.service';

@Component({
    selector: 'app-standalone',
    templateUrl: './standalone.component.html',
    styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

    @ViewChild("standalonePlugin", {static: false}) standalonePluginEl: ElementRef | undefined;

    @ViewChild('networkInput') networkInput?: ElementRef<HTMLElement>;
    @ViewChild('advancedSettings') advancedSettings?: ElementRef<HTMLElement>;
    @ViewChild('drugstoneApp') drugstoneApp?: ElementRef<HTMLElement>;

    @Input() api = ""
    network: Object = {nodes: [], edges: []}
    themeLight: Object = {}
    themeDark: Object = {}
    theme: Object = {}
    config: Object = {}
    configDark: Object = {}
    configLight: Object = {}

    rawNodes = "";
    rawEdges = "";
    public group = "gene";
    private delimList = ["\t", "\n", ",", ";", " "];

    public cysticFibrosisGenes = ['CFTR', 'TGFB1', 'TNFRSF1A', 'FCGR2A', 'ENG', 'DCTN4', 'CLCA4', 'STX1A',
            'SCNN1G', 'SCNN1A', 'SCNN1B']

    public nameMap = {
        nedrex: 'NeDRex',
        biogrid: 'BioGRID',
        iid: 'IID',
        intact: 'IntAct',
        string: 'STRING',
        apid: 'APID',
        drugcentral: 'DrugCentral',
        chembl: 'ChEMBL',
        dgidb: 'DGIdb',
        disgenet: 'DisGeNET',
        ctd: 'CTD',
        drugbank: 'DrugBank',
        omim: 'OMIM'
    }


    public dataLists = {
        identifierList: [{label: 'Symbol', value: 'symbol'}, {label: 'UniProt', value: 'uniprot'}, {
            label: 'Ensemble',
            value: 'ensg'
        }, {label: 'Entrez', value: 'entrez'}],
        drugProtInterList: [{label: 'DrugBank', value: {name: 'DrugBank', licenced: true}}, {
            label: 'ChEMBL',
            value: {name: 'ChEMBL', licenced: true}
        }, {
            label: 'DGIdb',
            value: {name: 'DGIdb', licenced: true}
        }],
        protProtInterList: [{label: 'STRING', value: {name: 'STRING', licenced: true}}, {
            label: 'BioGRID',
            value: {name: 'BioGRID', licenced: true}
        }, {
            label: 'APID',
            value: {name: 'APID', licenced: true}
        }],
        drugDisList: [],
        protDisList: []
    }

    constructor(private router: Router, public drugstone: RequestService, public themeService: ThemeService) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                if (val.url != null) {
                    // @ts-ignore
                    var page = val.url.substr(1).split("/")[0].split('#')[0]
                    if (page.indexOf("?") > -1) {
                        let params = {}
                        page.split("?")[1].split("&").forEach(pair => {
                            let p = pair.split("=");
                            // @ts-ignore
                            params[p[0]] = p[1];
                        })
                        this.setParams(params)
                    }
                }
            }
        })
        if (this.rawNodes === '') {
            this.updateNodeImport(this.cysticFibrosisGenes);
            this.setNetwork();
            setTimeout(() => {
                this.networkInput?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 1000)
        }
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
        this.loadDatasets()
    }

    ngAfterViewInit(): void {
        if (localStorage.getItem("darkTheme") === "true")
            this.switchTheme(true);
    }

    switchToDoc(id: string) {
        window.location.replace("/doc#" + id)
    }

    async loadDatasets() {
        this.drugstone.getDatasources(this.api).then(response => {
            this.dataLists = {
                identifierList: this.dataLists.identifierList,
                drugProtInterList: response['protein-drug'].map((source: { name: string; licenced: boolean; }) => {
                    return {'label': source.name + (source.licenced ? '(licenced)' : ''), value: source}
                }),
                protProtInterList: response['protein-protein'].map((source: { name: string; licenced: boolean; }) => {
                    return {'label': source.name + (source.licenced ? '(licenced)' : ''), value: source}
                }),
                drugDisList: response['drug-disorder'].map((source: { name: string; licenced: boolean; }) => {
                    return {'label': source.name + (source.licenced ? '(licenced)' : ''), value: source}
                }),
                protDisList: response['protein-disorder'].map((source: { name: string; licenced: boolean; }) => {
                    return {'label': source.name + (source.licenced ? '(licenced)' : ''), value: source}
                })
            }
        })
    }

    async setParams(params: object): Promise<any> {
        this.toggleTab(this.networkInput, false);
        this.toggleTab(this.advancedSettings, false);
        this.toggleTab(this.drugstoneApp, true);
        if ("taskId" in params) {
            // @ts-ignore
            this.changeConfig("taskId", params["token"]);
            return
        }

        let nodes: any[];
        nodes = [];
        let edges: any[];
        edges = [];

        if ("id" in params) {
            // @ts-ignore
            let response = await this.drugstone.getNetwork(this.api, params["id"]).then(response => {
                return response
            })
            nodes = response.network.nodes
            edges = response.network.edges
            if (response.config != null)
                Object.keys(response.config).forEach(key => this.changeConfig(key, response.config[key]))

        } else {
            if ("nodes" in params) { // @ts-ignore
                nodes = this.getNodes(params["nodes"], ",");
                this.rawNodes = nodes.map(o => o.label).join("\n")
            }
            if ("edges" in params) { // @ts-ignore
                edges = this.getEdges(params["edges"], ",", "%20");
                this.rawEdges = edges.map(o => o.from + " " + o.to).join("\n")
            }
            if ("identifier" in params) {
                // @ts-ignore
                let ident = params["identifier"]
                if (this.dataLists.identifierList.map(o => o.value).indexOf(ident) > -1)
                    this.changeConfig("identifier", ident)
            }
            if ("interactionProteinProtein" in params) {
                // @ts-ignore
                let ident = params["interactionProteinProtein"]
                if (this.dataLists.protProtInterList.map(o => o.value).indexOf(ident) > -1)
                    this.changeDataset("interactionProteinProtein", ident)
            }
            if ("interactionDrugProtein" in params) {
                // @ts-ignore
                let ident = params["interactionDrugProtein"]
                if (this.dataLists.drugProtInterList.map(o => o.value).indexOf(ident) > -1)
                    this.changeDataset("interactionDrugProtein", ident)
            }
            if ("autofillEdges" in params) {
                // @ts-ignore
                let fill = params["autofillEdges"] === "true"
                this.changeConfig("autofillEdges", fill)
            }
        }
        if (nodes.length > 0 || edges.length > 0) {
            this.network = {nodes: nodes, edges: edges}
        }
    }

    setNodes(): Object[] {
        if (this.rawNodes.length === 0)
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
        return this.getNodes(this.rawNodes, delim)
    }

    getNodes(list: string, delim: string): Object[] {
        // @ts-ignore
        return list.split(delim).map(entry => {
            let name = entry.trim()
            return {id: name, group: this.group, label: name}
        })
    }

    setEdges(): Object[] {
        if (this.rawEdges.length === 0)
            return []
        let delim = ","
        let min = 0;
        this.delimList.forEach(d => {
            if (d === "\n")
                return
            let count = this.countOccs(this.rawEdges, d)
            if (count > min) {
                min = count;
                delim = d;
            }
        })
        return this.getEdges(this.rawEdges, "\n", delim)
    }

    getEdges(list: string, delim1: string, delim2: string): Object[] {
        return list.split(delim1).map(line => {
            let pair = line.split(delim2)
            return {from: pair[0].trim(), to: pair[1].trim()}
        })
    }

    getConfig(param: string) {
        // @ts-ignore
        return this.config[param]
    }

    changeDataset(name: string, value: any) {
        this.changeConfig('licensedDatasets', value.licenced)
        this.changeConfig(name, value.name)
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

        this.toggleTab(this.networkInput, false);
        this.toggleTab(this.drugstoneApp, true);
    }

    setObject(dest: Object, src: Object) {
        Object.keys(src).forEach(key => {
            // @ts-ignore
            dest[key] = src[key];
        })
    }

    switchTheme(dark: boolean) {
        let theme = dark ? this.themeDark : this.themeLight
        Object.keys(theme).forEach(key => {
            // @ts-ignore
            this.standalonePluginEl?.nativeElement.style.setProperty(key, theme[key])
        })
        let conf = dark ? this.configDark : this.configLight;

        if (this.router.url.indexOf("?id") > -1) {
            Object.keys(conf).forEach(key => {
                if (key.indexOf("Groups") === -1) {
                    // @ts-ignore
                    this.changeConfig(key, conf[key])
                }
            })
        } else
            this.config = conf
    }

    public toggleTab(tab: ElementRef<HTMLElement> | undefined, open: boolean) {
        if (tab === undefined) {
            return;
        }
        const el: HTMLElement = tab.nativeElement;
        const is_closed = el.classList.contains('collapsed');
        if (open === is_closed) {
            el.click();
        }
    }


    public updateNodeImport(genes: any) {
        this.rawNodes = genes.join(',');
    }

}
