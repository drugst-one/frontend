import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

    public idPath = [0]
    public path = []
    public page = 0
    public home = {icon: 'pi pi-home'};
    navTree: MenuItem[] = [
        {id: "home", label: "Overview", command: () => this.navigationEvent([0])},
        {
            id: "start",
            label: "Get Started", command: () => this.navigationEvent([1]),
            items: [
                {id: 'basics', label: "Basic Integration", command: () => this.navigationEvent([1, 0])},
                {id: 'angular', label: "Angular JS setup", command: () => this.navigationEvent([1, 1])},
                {id: 'vuejs', label: "Vue.js setup", command: () => this.navigationEvent([1, 2])},
                {id: 'rshiny', label: "R-Shiny setup", command: () => this.navigationEvent([1, 3])}
            ]
        }, {
            id: 'ui',
            label: "The drugst.one UI", command: () => this.navigationEvent([2]),
            items: [
                {id: "ui-network", label: "Network", command: () => this.navigationEvent([2, 0])},
                {id: "ui-panels", label: "Panels", command: () => this.navigationEvent([2, 1])},
                {id: "ui-footer", label: "Footer Bar", command: () => this.navigationEvent([2, 2])},
                {id: "ui-tasks", label: "Task Execution", command: () => this.navigationEvent([2, 3])},
                {id: "ui-analysis", label: "Analysis window", command: () => this.navigationEvent([2, 4])},
            ]
        },
        {id: 'customize',
            label: "Customize drugst.one", command: () => this.navigationEvent([3]),
            items: [
                {id: "cust-config", label: "General configuration", command: () => this.navigationEvent([3, 0])},
                {id: "cust-network", label: "Network", command: () => this.navigationEvent([3, 1])},
                {id: "cust-version", label: "Version Selection", command: () => this.navigationEvent([3, 2])},
                {id: "cust-style", label: "Style adjustments", command: () => this.navigationEvent([3, 3])},
                {id: "cust-events", label: "Events", command: () => this.navigationEvent([3, 4])},
            ]
        },
        {
            id: "implementation", label: "Implementation Details", command: () => this.navigationEvent([4]),
            items: [
                {id: "data", label: "Datasources", command: () => this.navigationEvent([4, 0])},
                {id: "vis", label: "Vis.js", command: () => this.navigationEvent([4, 1])},
                {id: "algorithms", label: "Algorithms", command: () => this.navigationEvent([4, 2])},
            ]
        },
        { id:"faq", label:"FAQ", command:()=>this.navigationEvent([5])}

    ]

    constructor(private router: Router) {
        this.reset()
    }

    ngOnInit(): void {
    }

    reset(): void {
        this.idPath = [0]
        this.updatePage()
        this.updatePath()
    }

    update(): void {
        this.updatePage()
        this.updatePath()
        this.updateLocation(false)
    }

    updatePage(): void {
        this.page = this.idPath[0]
    }


    updatePath(): void {
        this.path = []
        for (let idx = 0; idx < this.idPath.length; idx++) {
            // @ts-ignore
            this.path.push({label: this.getAttribute(this.idPath.slice(0, idx + 1), this.navTree, "label"), id: idx})
        }
    }

    updateLocation(instant: boolean): void {
        if (!instant)
            setTimeout(()=>{
                this.updateLocation(true)
            }, 200)
        else {
            if(this.idPath.length===1)
                this.scroll(0)
            else
            // @ts-ignore
            this.scroll(document.getElementById(this.getAttribute(this.idPath, this.navTree, "id")+"-content").offsetTop)
        }
    }

    scroll(offset:number) {
        // @ts-ignore
        const panel = document.getElementById("page-container").children[0].children[0].children[0]
        // @ts-ignore
        panel.scrollTop = offset
    }

    getAttribute(path: number[], tree: Object[], attribute: String): string {
        if (path.length === 0)
            return ""
        if (path.length === 1) {
            // @ts-ignore
            return tree[path[0]][attribute]
        }
        // @ts-ignore
        return this.getAttribute(path.slice(1), tree[path[0]].items, attribute)
    }

    breadcrumbsEvent(event: any) {
        this.navigationEvent(this.idPath.slice(0, event.item.id + 1))
    }

    navigationEvent($event: number[]) {
        if ($event == null || $event.length === 0) {
            this.reset()
        } else {
            this.idPath = $event
            this.update()
        }
    }

    navigationBarEvent($event: any) {
        this.navTree[this.page]
        $event.item.id
    }
}
