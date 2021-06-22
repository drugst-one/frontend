import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

    @Output() configChangeEvent = new EventEmitter<object>();
    @Output() colorChangeEvent = new EventEmitter<object>();
    @Output() editGroupEvent = new EventEmitter<object>();
    public toggleSideLeft: boolean = true;
    public useLegendURL: boolean = true;
    public legendURL: string = "https://exbio.wzw.tum.de/covex/assets/leg1.png";
    @Input() public nodeGroups:object = {}
    public edgeGroups = {}
    public colors = {
        primary: '#48C774',
        success: '#3070B3',
        danger: '#EF476F',
        background: '#ffffff',
        text: '#000'
    }

    //TODO shapes as dropdown selection
    public shapeList: Object[];


    constructor() {
        this.shapeList = [{label: 'circle', value: 'circle'}, {label: 'diamond', value: 'diamond'}, {
            label: 'star',
            value: 'star'
        }, {label: 'square', value: 'square'}, {label: 'ellipse', value: 'ellipse'}, {
            label: 'triangle',
            value: 'triangle'
        }, {label: 'box', value: 'triangle'}, {label: 'dot', value: 'dot'}, {
            label: 'hexagon',
            value: 'hexagon'
        }, {label: 'triangleDown', value: 'triangleDown'}]
    }

    ngOnInit(): void {
    }

    changeGroupConfig(groups: object, groupId: string, key: any, value: any) {
        console.log(value)
        // @ts-ignore
        console.log("setting groupid=" + groupId + " at key=" + key + " from " + groups[groupId][key] + " to " + value)
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


    deleteGroup(nodeGroups: object, id: string) {
        // @ts-ignore
        // delete nodeGroups[id]
        this.editGroupEvent.emit({delete:{type:'node', id:id}})
        // this.updateGroupsConfig(nodeGroups)
    }

    changeConfig(name: string, value: any) {
        let out = {}
        // @ts-ignore
        out[name] = value;
        this.configChangeEvent.emit(out)
    }


    changeColor(label: string, color: string) {
        // TODO change color
    }

    isBig(value: any): boolean {
        return value.startsWith("big ");
    }

    addNewNodeGroup() {
        this.editGroupEvent.emit({add:"node"})
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

    objectSize(object:object) :number{
        return Object.keys(object).length;
    }


}
