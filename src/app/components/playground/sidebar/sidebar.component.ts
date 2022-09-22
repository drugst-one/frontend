import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemeService} from 'src/app/services/theme.service';
// @ts-ignore
import themes from "../../../../themes.json"
import {RequestService} from "../../../services/requestService";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

    @Output() configChangeEvent = new EventEmitter<object>();
    @Output() colorChangeEvent = new EventEmitter<object>();
    @Output() styleChangeEvent = new EventEmitter<object>();
    @Output() editGroupEvent = new EventEmitter<object>();
    public useLegendURL: boolean = false;
    public themeIsDark: boolean = true;
    @Input() public nodeGroups: object = {}
    @Input() public edgeGroups: object = {}
    @Input() public config: object = {}
    @Input() public theme = {}
    @Input() public api: string = ''

    public shapeList: Object[] = [{label: 'circle', value: 'circle'}, {label: 'diamond', value: 'diamond'}, {
        label: 'star',
        value: 'star'
    }, {label: 'square', value: 'square'}, {label: 'ellipse', value: 'ellipse'}, {
        label: 'triangle',
        value: 'triangle'
    }, {label: 'box', value: 'box'}, {label: 'dot', value: 'dot'}, {
        label: 'hexagon',
        value: 'hexagon'
    }, {label: 'triangleDown', value: 'triangleDown'}, {label: 'image', value: 'image'}, {
        label: 'text',
        value: 'text'
    }];
    public sidebarPosList = [{label: 'left', value: 'left'}, {label: 'right', value: 'right'}]
    public legendPosList = [{label: 'left', value: 'left'}, {label: 'right', value: 'right'}]
    public networkMenuPosList = [{label: 'right', value: 'right'}, {label: 'left', value: 'left'}, {
        label: 'off',
        value: false
    }]
    public dataLists = {
        identifierList: [{label: 'Symbol', value: 'symbol'}, {label: 'UniProt', value: 'uniprot'}, {
            label: 'Ensemble',
            value: 'ensg'
        }, {label: 'Entrez', value: 'entrez'}],
        drugProtInterList: [],
        protProtInterList: [],
        drugDisList: [],
        protDisList: []
    }

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
    };
    public themeList: Object[] = [];

    public fontList: Object[] = [{label: 'Helvetica Neue, sans-serif', value: 'Helvetica Neue, sans-serif'}, {label: 'Oxygen', value: 'Oxygen'}, {label:'custom', value: 'custom'}];
    public fonts = ['Helvetica Neue, sans-serif', 'Helvetica', 'Ubuntu', 'BlinkMacSystemFont', '-apple-system','Segoe UI', 'Roboto', 'Oxygen','Cantarell','Fira Sans', 'Droid Sans', 'Areal', 'custom']
    public useCustomFont: boolean = false;


    constructor(public themeService: ThemeService, public drugstone: RequestService) {
        this.readThemes();
    }

    ngOnInit(): void {
        this.loadDatasets()
    }

    readThemes(): void {
        Object.keys(themes).forEach(label => {
            this.themeList.push({label: label, value: themes[label]})
        })
    }


    async loadDatasets() {
        this.drugstone.getDatasources(this.api).then(response => {
            this.dataLists = {
                identifierList: this.dataLists.identifierList, drugProtInterList: [],
                protProtInterList: [],
                drugDisList: [],
                protDisList: []
            }
            let uniq: string[] = []
            response['protein-drug'].forEach((source: { name: string; }) => {
                if (uniq.indexOf(source.name.toLowerCase()) === -1) {
                    uniq.push(source.name.toLowerCase())
                    // @ts-ignore
                    this.dataLists.drugProtInterList.push({label: this.nameMap[source.name] ? this.nameMap[source.name.toLowerCase()] : source.name, value: source.name
                    })
                }
            })
            uniq = []
            response['protein-protein'].forEach((source: { name: string; }) => {
                if (uniq.indexOf(source.name.toLowerCase()) === -1) {
                    uniq.push(source.name.toLowerCase())
                    // @ts-ignore
                    this.dataLists.protProtInterList.push({label: this.nameMap[source.name] ? this.nameMap[source.name.toLowerCase()] : source.name, value: source.name
                    })
                }
            })
            uniq = []
            response['protein-disorder'].forEach((source: { name: string; }) => {
                if (uniq.indexOf(source.name.toLowerCase()) === -1) {
                    uniq.push(source.name.toLowerCase())
                    // @ts-ignore
                    this.dataLists.protDisList.push({label: this.nameMap[source.name] ? this.nameMap[source.name.toLowerCase()] : source.name, value: source.name
                    })
                }
            })
            uniq = []
            response['drug-disorder'].forEach((source: { name: string; }) => {
                if (uniq.indexOf(source.name.toLowerCase()) === -1) {
                    uniq.push(source.name.toLowerCase())
                    // @ts-ignore
                    this.dataLists.drugDisList.push({label: this.nameMap[source.name] ? this.nameMap[source.name.toLowerCase()] : source.name, value: source.name
                    })
                }
            })
        })
    }

    changeGroupConfig(groups: object, groupId: string, key: any, value: any) {
        if (groups === this.nodeGroups && key === 'shape' && value !== 'image')
            this.changeNodeImage(null, groupId)
        // @ts-ignore
        groups[groupId][key] = value
        if (key === 'id') {
            // @ts-ignore
            groups[value] = groups[groupId]
            this.deleteGroup(groups, groupId)
        }
        this.updateGroupsConfig(groups)
    }

    updateGroupsConfig(groups: object) {
        if (groups === this.nodeGroups)
            this.changeConfig('nodeGroups', groups)
        else if (groups === this.edgeGroups)
            this.changeConfig('edgeGroups', groups)
    }


    deleteGroup(groups: object, id: string) {
        this.editGroupEvent.emit({delete: {type: this.nodeGroups === groups ? 'node' : 'edge', id: id}})
    }

    changeConfig(name: string, value: any) {
        let out = {}
        // @ts-ignore
        out[name] = value;
        this.configChangeEvent.emit(out)
    }


    changeColor(label: any, color: string) {
        let change = {}
        // @ts-ignore
        change[label] = color;
        this.colorChangeEvent.emit(change)
    }

    changeStyle(label: any, value: any){
        let change = {}
        // @ts-ignore
        change[label] = value
        this.styleChangeEvent.emit(change)
    }

    isBig(value: any): boolean {
        return value.startsWith("big ");
    }

    addNewNodeGroup() {
        this.editGroupEvent.emit({add: "node"})
    }

    addNewEdgeGroup() {
        this.editGroupEvent.emit({add: "edge"})
    }


    RGBToHex(ri: number, gi: number, bi: number) {
        let r = ri.toString(16);
        let g = gi.toString(16);
        let b = bi.toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;

        return "#" + r + g + b;
    }

    hexToRGB(h: string) {
        let r = '0', g = '0', b = '0';
        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];

        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
        }
        return "rgb(" + +r + "," + +g + "," + +b + ")";
    }

    objectSize(object: object): number {
        return Object.keys(object).length;
    }

    changeNodeImage(image: any, key: any) {
        if (image != null) {
            // @ts-ignore
            this.nodeGroups[key].image = image
        } else {
            // @ts-ignore
            delete this.nodeGroups[key].image
        }
        this.updateGroupsConfig(this.nodeGroups)
    }


    changeEdgeDashes(edgeGroups: object, key: string, idx: number, updt: any) {
        // @ts-ignore
        let newDashes = edgeGroups[key]['dashes']
        // @ts-ignore
        newDashes[idx] = updt
        this.changeGroupConfig(edgeGroups, key, 'dashes', newDashes);
    }

    getConfig(param: string) {
        // @ts-ignore
        return this.config[param]
    }

    leftSidebarEnabled() {
        return this.getConfig('showLeftSidebar') == null || this.getConfig('showLeftSidebar') === true
    }

    rightSidebarEnabled() {
        return this.getConfig('showRightSidebar') == null || this.getConfig('showRightSidebar') === true
    }

    switchColorMode(dark: boolean) {
        this.changeColor("--drgstn-border", this.getBorderColor(dark))
        this.changeColor("--drgstn-tooltip", this.getTooltipColor(dark))
        // return dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
    }

    getBorderColor(dark: boolean) {
        return dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
    }

    getTooltipColor(dark: boolean) {
        return dark ? "rgba(181,181,181,0.9)" : "rgba(74,74,74,0.9)";
    }

    toBoolean(value: any) {
        if (typeof value == "boolean")
            return value
        if (typeof value == "string")
            return value[0] === 't'
        return !!value
    }

    isDarkMode(theme: any) {
        // @ts-ignore
        return theme["--drgstn-border"].split("255").length > 1;
    }

    getValue(value: any, color: string) {
        // @ts-ignore
        return value[color]
    }

    applyTheme(theme: string) {
        this.themeIsDark = this.isDarkMode(theme)
        // @ts-ignore
        this.theme["--drgstn-border"].color = this.getBorderColor(this.themeIsDark)
        // @ts-ignore
        this.theme["--drgstn-tooltip"].color = this.getTooltipColor(this.themeIsDark)
        Object.keys(theme).forEach(label => {
            // @ts-ignore
            this.changeColor(label, theme[label])
        })

    }

    applyFont(font: string | any) {
        console.log(font)
        if (font === 'custom') {
            this.useCustomFont = true
        } else {
            this.useCustomFont = false
            this.setFont(font)
        }
    }

    applyCustomFont(font: string){
        this.useCustomFont = true
        this.setFont(font)
    }

    setFont(font: string){
        // @ts-ignore
        this.theme["--drgstn-font-family"].value = font
        this.changeStyle("--drgstn-font-family", font)
    }


    getThemeValue(key: any, value: string) {
        // @ts-ignore
        if (this.theme[key] != null)
            // @ts-ignore
            return this.theme[key][value]
        return undefined
    }

    length(theme: {}) {
        return Object.keys(theme).length
    }
}
