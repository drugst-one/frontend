import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// @ts-ignore
import themes from "../../../../themes.json"

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

    @Output() configChangeEvent = new EventEmitter<object>();
    @Output() colorChangeEvent = new EventEmitter<object>();
    @Output() editGroupEvent = new EventEmitter<object>();
    public useLegendURL: boolean = false;
    public themeIsDark: boolean = true;
    @Input() public nodeGroups: object = {}
    @Input() public edgeGroups: object = {}
    @Input() public config: object = {}
    @Input() public theme = {}

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
    public legendPosList = [{label: 'left', value: 'left'}, {label: 'right', value: 'right'}]
    public dataLists = {
        identifierList: [{label: 'Symbol', value: 'symbol'}, {label: 'UniProt', value: 'uniprot'}, {
            label: 'Ensemble',
            value: 'ensg'
        }],
        drugProtInterList: [{label: 'DrugBank', value: 'DrugBank'}, {label: 'Chembl', value: 'Chembl'}, {
            label: 'DGIdb',
            value: 'DGIdb'
        }],
        protProtInterList: [{label: 'STRING', value: 'STRING'}, {label: 'BioGRID', value: 'BioGRID'}, {
            label: 'APID',
            value: 'APID'
        }],
    }
    public themeList: Object[] = [];

    // export type Identifier = 'symbol'|'uniprot'|'ensg';
    // export type InteractionDrugProteinDB = 'DrugBank'|'Chembl'|'DGIdb';
    // export type InteractionProteinProteinDB = 'STRING'|'BioGRID'|'APID';


    constructor() {
        this.readThemes();
    }

    ngOnInit(): void {
    }

    readThemes(): void {
        Object.keys(themes).forEach(label => {
            this.themeList.push({label: label, value: themes[label]})
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
        this.themeIsDark = dark;
        this.changeColor("--drgstn-border", dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)")
        return dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
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
        // @ts-ignore
        this.theme["--drgstn-border"].color = this.switchColorMode(this.isDarkMode(theme))
        Object.keys(theme).forEach(label => {
            // @ts-ignore
            this.changeColor(label, theme[label])
        })

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
