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
    groups: Object = {}
    configDark: Object = {}
    configLight: Object = {}

    rawNodes = "";
    rawEdges = "";
    public group = "gene";
    private delimList = ["\t", "\n", ",", ";", " "];

    public cysticFibrosisGenes = ['CFTR', 'TGFB1', 'TNFRSF1A', 'FCGR2A', 'ENG', 'DCTN4', 'CLCA4', 'STX1A',
        'SCNN1G', 'SCNN1A', 'SCNN1B']

    public nameMap: { [key: string]: string } = {
        'nedrex': 'NeDRex',
        'biogrid': 'BioGRID',
        'iid': 'IID',
        'intact': 'IntAct',
        'string': 'STRING',
        'apid': 'APID',
        'drugcentral': 'DrugCentral',
        'chembl': 'ChEMBL',
        'dgidb': 'DGIdb',
        'disgenet': 'DisGeNET',
        'ctd': 'CTD',
        'drugbank': 'DrugBank',
        'omim': 'OMIM'
    }

    public dataMaps = {
        drugProtInterList: {
            'NeDRex': {name: 'NeDRex', licenced: false},
            'NeDRex (licensed)': {name: 'NeDRex', licenced: true},
            'DrugBank (licensed)': {name: 'DrugBank', licenced: true},
            'ChEMBL': {name: 'ChEMBL', licenced: false},
            'ChEMBL (licensed)': {name: 'ChEMBL', licenced: true},
            'DGIdb': {name: 'DGIdb', licenced: false},
            'DGIdb (licensed)': {name: 'DGIdb', licenced: true}
        }
        , protProtInterList: {
            'NeDRex': {name: 'NeDRex', licenced: false},
            'NeDRex (licensed)': {name: 'NeDRex', licenced: true},
            'STRING': {name: 'STRING', licenced: false},
            'STRING (licensed)': {name: 'STRING', licenced: true},
            'BioGRID': {name: 'BioGRID', licenced: false},
            'BioGRID (licensed)': {name: 'BioGRID', licenced: true},
            'APID': {name: 'APID', licenced: false},
            'APID (licensed)': {name: 'APID', licenced: false}
        },
        drugDisList: {
            'NeDRex': {name: 'NeDRex', licenced: false},
            'NeDRex (licensed)': {name: 'NeDRex', licenced: true},
            'OMIM': {name: 'OMIM', licenced: true}
        },
        protDisList: {
            'NeDRex': {name: 'NeDRex', licenced: false},
            'NeDRex (licensed)': {name: 'NeDRex', licenced: true}
        }
    }

    public dataLists = {
        identifierList: [{label: 'Symbol', value: 'symbol'}, {label: 'UniProt', value: 'uniprot'}, {
            label: 'Ensemble',
            value: 'ensg'
        }, {label: 'Entrez', value: 'entrez'}],
        drugProtInterList: [
            {label: 'NeDRex', value: {name: 'NeDRex', licenced: false}},
            {label: 'NeDRex (licensed)', value: {name: 'NeDRex', licenced: true}},
            {label: 'DrugBank', value: {name: 'DrugBank', licenced: true}},
            {label: 'ChEMBL', value: {name: 'ChEMBL', licenced: false}},
            {label: 'ChEMBL (licensed)', value: {name: 'ChEMBL', licenced: true}},
            {label: 'DGIdb', value: {name: 'DGIdb', licenced: false}},
            {label: 'DGIdb (licensed)', value: {name: 'DGIdb', licenced: true}}
        ],
        protProtInterList: [
            {label: 'NeDRex', value: {name: 'NeDRex', licenced: false}},
            {label: 'NeDRex (licensed)', value: {name: 'NeDRex', licenced: true}},
            {label: 'STRING', value: {name: 'STRING', licenced: false}},
            {label: 'STRING (licensed)', value: {name: 'STRING', licenced: true}},
            {label: 'BioGRID', value: {name: 'BioGRID', licenced: false}},
            {label: 'BioGRID (licensed)', value: {name: 'BioGRID', licenced: true}},
            {label: 'APID', value: {name: 'APID', licenced: false}},
            {label: 'APID (licensed)', value: {name: 'APID', licenced: true}}
        ],
        drugDisList: [
            {label: 'NeDRex', value: {name: 'NeDRex', licenced: false}},
            {label: 'NeDRex (licensed)', value: {name: 'NeDRex', licenced: true}}
        ],
        protDisList: [
            {label: 'NeDRex', value: {name: 'NeDRex', licenced: false}},
            {label: 'NeDRex (licensed)', value: {name: 'NeDRex', licenced: false}}
        ]
    }

    public selectedDatasets = {}

    constructor(private router: Router, public drugstone: RequestService, public themeService: ThemeService) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                if (val.url != null) {
                    // @ts-ignore
                    this.readParamsFromURL(val.url)
                }
            }
        })
    }

    readParamsFromURL(url: string): void {
        var page = url.substr(1).split("/")[0].split('#')[0]
        if (page.indexOf("?") > -1) {
            let params = {}
            page.split("?")[1].split("&").forEach(pair => {
                let p = pair.split("=");
                // @ts-ignore
                params[p[0]] = p[1];
            })
            this.setParams(params).catch(console.error)
            history.replaceState('', '', "/standalone" + location.search)
        } else {
            if (this.rawNodes === '') {
                this.updateNodeImport(this.cysticFibrosisGenes);
                this.setNetwork();
                setTimeout(() => {
                    this.networkInput?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
                }, 1000)
            }
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
        this.loadDatasets().then(() => {
            this.readParamsFromURL(window.location.href.substring(window.location.origin.length))
        })


    }

    ngAfterViewInit(): void {
        if (localStorage.getItem("darkTheme") === "true")
            this.switchTheme(true);
    }

    switchToDoc(id: string) {
        window.location.replace("/doc#" + id)
    }

    loadDatasets() {
        return this.drugstone.getDatasources(this.api).then(response => {
            this.dataLists = {
                identifierList: this.dataLists.identifierList,
                drugProtInterList: this.sorted(response['protein-drug'].map((source: { name: string; licenced: boolean; }) => {
                    return {
                        'label': this.nameMap[source.name.toLowerCase()] + (source.licenced ? ' (licensed)' : ''),
                        value: source
                    }
                })),
                protProtInterList: this.sorted(response['protein-protein'].map((source: { name: string; licenced: boolean; }) => {
                    return {
                        'label': this.nameMap[source.name.toLowerCase()] + (source.licenced ? ' (licensed)' : ''),
                        value: source
                    }
                })),
                drugDisList: this.sorted(response['drug-disorder'].map((source: { name: string; licenced: boolean; }) => {
                    return {
                        'label': this.nameMap[source.name.toLowerCase()] + (source.licenced ? ' (licensed)' : ''),
                        value: source
                    }
                })),
                protDisList: this.sorted(response['protein-disorder'].map((source: { name: string; licenced: boolean; }) => {
                    return {
                        'label': this.nameMap[source.name.toLowerCase()] + (source.licenced ? ' (licensed)' : ''),
                        value: source
                    }
                }))
            }
            // @ts-ignore
            this.dataMaps.drugProtInterList = {}
            this.dataLists.drugProtInterList.forEach(d => {
                // @ts-ignore
                this.dataMaps.protProtInterList[d.label] = d.value
            })
            this.dataLists.drugDisList.forEach(d => {
                // @ts-ignore
                this.dataMaps.drugDisList[d.label] = d.value
            })
            this.dataLists.protDisList.forEach(d => {
                // @ts-ignore
                this.dataMaps.protDisList[d.label] = d.value
            })
            this.dataLists.drugProtInterList.forEach(d => {
                // @ts-ignore
                this.dataMaps.drugProtInterList[d.label] = d.value
            })
        })
    }

    sorted(list: any) {
        // @ts-ignore
        return list.sort((a, b) => (a.label < b.label ? -1 : 1))
    }

    async setParams(params: object): Promise<any> {
        this.loadDatasets().then(async () => {
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
                }).catch(console.error)
                nodes = response.network.nodes
                edges = response.network.edges
                if (response.groups != null)
                    Object.keys(response.groups).forEach(key => this.changeGroups(key, response.groups[key]))
                if (response.config != null)
                    Object.keys(response.config).forEach(key => this.changeConfig(key, response.config[key]))

            } else {
                let licensed = false;
                let identifier = "symbol"
                if ("identifier" in params) {
                    // @ts-ignore
                    identifier = params["identifier"]
                    if (this.dataLists.identifierList.map(o => o.value).indexOf(identifier) > -1)
                        this.changeConfig("identifier", identifier)
                }
                if ("nodes" in params) { // @ts-ignore
                    let node_ids = this.getNodeNames(params["nodes"], ",");
                    let converted = await this.drugstone.convertCompactNotation(this.api, {
                        nodes: node_ids,
                        identifier: identifier
                    }).catch(error => {
                        converted = node_ids;
                        console.error(error)
                    })
                    nodes = this.toNodes(converted)
                    // @ts-ignore
                    this.rawNodes = nodes.map(o => o.label).join("\n")
                }
                if ("edges" in params) { // @ts-ignore
                    edges = this.getEdges(params["edges"], ",", "%20");
                    this.rawEdges = edges.map(o => o.from + " " + o.to).join("\n")
                }
                if ("physicsOn" in params) {
                    // @ts-ignore
                    let activate = params["physicsOn"] === "true"
                    this.changeConfig("physicsOn", activate)
                }

                if ("licensedDatasets" in params) {
                    // @ts-ignore
                    licensed = params["licensedDatasets"] === "true"
                    this.changeConfig("licensedDatasets", licensed)
                }
                if ("interactionProteinProtein" in params) {
                    // @ts-ignore
                    let ident = this.nameMap[params["interactionProteinProtein"].toLowerCase()] + (licensed ? ' (licensed)' : '')
                    // @ts-ignore
                    let ds = this.dataMaps.protProtInterList[ident]
                    if (ds) {
                        this.changeDataset("interactionProteinProtein", ds)
                    }
                }
                if ("interactionDrugProtein" in params) {
                    // @ts-ignore
                    let ident = this.nameMap[params["interactionDrugProtein"].toLowerCase()] + (licensed ? ' (licensed)' : '')
                    // @ts-ignore
                    let ds = this.dataMaps.drugProtInterList[ident]
                    if (ds) {
                        this.changeDataset("interactionDrugProtein", ds)
                    }
                }
                if ("indicationDrugDisorder" in params) {
                    // @ts-ignore
                    let ident = this.nameMap[params["indicationDrugDisorder"].toLowerCase()] + (licensed ? ' (licensed)' : '')
                    // @ts-ignore
                    let ds = this.dataMaps.drugDisList[ident]
                    if (ds) {
                        this.changeDataset("indicationDrugDisorder", ds)
                    }
                }
                if ("associatedProteinDisorder" in params) {
                    // @ts-ignore
                    let ident = this.nameMap[params["associatedProteinDisorder"].toLowerCase()] + (licensed ? ' (licensed)' : '')
                    // @ts-ignore
                    let ds = this.dataMaps.protDisList[ident]
                    if (ds) {
                        this.changeDataset("associatedProteinDisorder", ds)
                    }
                }
                if ("autofillEdges" in params) {
                    // @ts-ignore
                    let fill = params["autofillEdges"] === "true"
                    this.changeConfig("autofillEdges", fill)
                }
                if ("activateNetworkMenuButtonAdjacentDrugs" in params) {
                    // @ts-ignore
                    let activate = params["activateNetworkMenuButtonAdjacentDrugs"] === "true"
                    this.changeConfig("activateNetworkMenuButtonAdjacentDrugs", activate)
                }

                if ("activateNetworkMenuButtonAdjacentDisorders" in params) {
                    // @ts-ignore
                    let activate = params["activateNetworkMenuButtonAdjacentDisorders"] === "true"
                    this.changeConfig("activateNetworkMenuButtonAdjacentDisorders", activate)
                }

                if ("activateNetworkMenuButtonAdjacentDisorderDrugs" in params) {
                    // @ts-ignore
                    let activate = params["activateNetworkMenuButtonAdjacentDisorderDrugs"] === "true"
                    this.changeConfig("activateNetworkMenuButtonAdjacentDisorderDrugs", activate)
                }


            }
            if (nodes.length > 0 || edges.length > 0) {
                this.network = {nodes: nodes, edges: edges}
            }
        })
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

    getNodeNames(list: string, delim: string): string[] {
        // @ts-ignore
        return list.split(delim).map(entry => {
            return entry.trim()
        })
    }

    toNodes(list: string[]): Object[] {
        return list.map(name => {
            return {id: name, group: this.group, label: name}
        })
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

    isLicensed(): boolean {
        // @ts-ignore
        return Object.values(this.selectedDatasets).reduce((a,b) => a || b)
    }

    changeDataset(name: string, value: any) {
        // @ts-ignore
        this.selectedDatasets[name] = value.licenced
        this.changeConfig('licensedDatasets', this.isLicensed())
        this.changeConfig(name, value.name)
    }

    changeGroups(name: string, value: any) {
        let change = {}
        // @ts-ignore
        change[name] = value;
        Object.keys(change).forEach(name => {
            // @ts-ignore
            if (change[name] != null)
                // @ts-ignore
                this.groups[name] = change[name];
            else
                // @ts-ignore
                delete this.groups[name]
        })
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
