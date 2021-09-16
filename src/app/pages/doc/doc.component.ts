import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

    @Input() api = ""
    @Input() version = ""
    @Input() serverVersion = ""
    @Input() host = ""
    public idPath = [0]
    public path = []
    public page = 0
    public idMap = {}
    public home = {icon: 'pi pi-home'};
    navTree: MenuItem[] = [
        {id: "home", label: "Overview", command: () => this.navigationEvent([0]), routerLink:"doc/home"},
        {
            id: "start",
            label: "Get Started", command: () => this.navigationEvent([1]),
            items: [
                {
                    id: 'basics',
                    icon: "fab fa-html5",
                    label: "Basic Integration",
                    command: () => this.navigationEvent([1, 0])
                },
                {
                    id: 'angular',
                    icon: "fab fa-angular",
                    label: "AngularJS Setup",
                    command: () => this.navigationEvent([1, 1])
                },
                {id: 'vuejs', icon: "fab fa-vuejs", label: "Vue.js Setup", command: () => this.navigationEvent([1, 2])},
                {
                    id: 'rshiny',
                    icon: "fab fa-r-project",
                    label: "R-Shiny Setup",
                    command: () => this.navigationEvent([1, 3])
                },
                {
                    id: 'django',
                    icon: "fab fa-python",
                    label: "Django Setup",
                    command: () => this.navigationEvent([1, 4])
                },
                {
                    id: 'other',
                    icon: "fas fa-toolbox",
                    label: "Other Frameworks",
                    command: () => this.navigationEvent([1, 5])
                }
            ], routerLink:"doc/start"
        }, {
            id: 'ui',
            label: "The Drugst.One UI", command: () => this.navigationEvent([2]),
            items: [
                {
                    id: "ui-network",
                    icon: "fas fa-project-diagram",
                    label: "Network",
                    command: () => this.navigationEvent([2, 0])
                },
                {id: "ui-panels", icon: "fas fa-columns", label: "Panels", command: () => this.navigationEvent([2, 1])},
                {
                    id: "ui-footer",
                    icon: "fas fa-shoe-prints",
                    label: "Footer Bar",
                    command: () => this.navigationEvent([2, 2])
                },
                {
                    id: "ui-tasks",
                    icon: "fas fa-tasks",
                    label: "Task Execution",
                    command: () => this.navigationEvent([2, 3])
                },
                {
                    id: "ui-analysis",
                    icon: "fas fa-search",
                    label: "Analysis Window",
                    command: () => this.navigationEvent([2, 4])
                },
            ], routerLink:"doc/ui"
        },
        {
            id: 'customize',
            label: "Customize Drugst.One", command: () => this.navigationEvent([3]),
            items: [
                {id: "cust-config", icon:"fas fa-cogs", label: "General Configuration", command: () => this.navigationEvent([3, 0])},
                {id: "cust-network", icon:"fas fa-project-diagram", label: "Network", command: () => this.navigationEvent([3, 1])},
                {id: "cust-version",icon:"fas fa-code-branch", label: "Version Selection", command: () => this.navigationEvent([3, 2])},
                {id: "cust-style", icon:"fas fa-palette", label: "Style Adjustments", command: () => this.navigationEvent([3, 3])},
                {id: "cust-events",icon:"fas fa-bullhorn", label: "Events", command: () => this.navigationEvent([3, 4])},
            ], routerLink:"doc/customize"
        }, {
         id:'standalone',
            label: "Standalone / Drugst.online", command: () => this.navigationEvent([4]),
            items:[
                {id: "standalone-options", icon:"fas fa-globe", label: "Standalone Options", command: () => this.navigationEvent([4, 0])},
                {id: "standalone-url", icon:"fab fa-html5", label: "Standalone API", command: () => this.navigationEvent([4, 1])},
            ], routerLink:"doc/standalone"
        },
        {
            id: "implementation", label: "Implementation Details", command: () => this.navigationEvent([5]),
            items: [
                {id: "data",icon:"fas fa-database", label: "Datasources", command: () => this.navigationEvent([5, 0])},
                {id: "vis", icon:"fas fa-project-diagram", label: "vis.js", command: () => this.navigationEvent([5, 1])},
                {id: "algorithms", icon:"fas fa-magic", label: "Algorithms", command: () => this.navigationEvent([5, 2])},
            ], routerLink:"doc/implementation"
        },
        {id: "faq", label: "FAQ", command: () => this.navigationEvent([6]) , routerLink:"doc/faq"}

    ]

    constructor(private router: Router) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                if (val.url != null) {
                    // @ts-ignore
                    var path = val.url.substr(1)
                    var page = path.split("/")[0].split('#')[0]
                    // @ts-ignore
                    if(page==='doc'){
                        if(path.indexOf("/")>-1){
                            var section = path.split("/")[1]

                            if(section.indexOf("#")>-1){
                                var entry = section.split('#')[1]
                                this.navigateToId(entry)
                            }else{
                                this.navigateToId(section)
                            }
                        }
                    }

                }
            }
        })
        this.reset()
    }

    ngOnInit(): void {
        this.createIdMap([], this.navTree)
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
            setTimeout(() => {
                this.updateLocation(true)
            }, 200)
        else {
            if (this.idPath.length === 1)
                this.scroll(0)
            else
                // @ts-ignore
                this.scroll(document.getElementById(this.getAttribute(this.idPath, this.navTree, "id") + "-content").offsetTop)
        }
    }

    scroll(offset: number) {
        // @ts-ignore
        const panel = document.getElementById("page-container").children[0].children[0].children[0]
        // @ts-ignore
        panel.scrollTo({top: offset, behavior: "smooth"})
        // panel.scrollTop = offset
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
            if($event.length>1)
                window.location.href=window.location.href.split('#')[0]+"#"+this.getAttribute($event,this.navTree,"id")
            this.idPath = $event
            this.update()
        }
    }

    navigationBarEvent($event: any) {
        this.navTree[this.page]
        $event.item.id
    }

    createIdMap(currentIds: number[], tree: MenuItem[]): void {
        for (let id = 0; id < tree.length; id++) {
            let subTree = tree[id]
            let ids = currentIds.concat(id)
            // @ts-ignore
            this.idMap[subTree.id] = ids
            if (subTree.items != null)
                this.createIdMap(ids, subTree.items)
        }
    }

    navigateToId(id: string) {
        // @ts-ignore
        this.navigationEvent(this.idMap[id]);
    }
}
