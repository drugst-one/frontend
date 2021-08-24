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
        {id: "home", label: "Home", command: () => this.navigationEvent([0])},
        {
            id: "start",
            label: "Get Started", command: () => this.navigationEvent([1]),
            items: [
                {id: 'need', label: "Do I need Drugstone?!", command: () => this.navigationEvent([1, 0])}
            ]
        }, {
            id: 'integrate',
            label: "How to integrate Drugstone?", command: () => this.navigationEvent([2]),
            items: [
                {id: "component", label: "Adding the web-component", command: () => this.navigationEvent([2, 0])},
                {id: "version", label: "Version Selection", command: () => this.navigationEvent([2, 1])},
                {id: "options", label: "Options", command: () => this.navigationEvent([2, 2])},
                {id: "network", label: "Network", command: () => this.navigationEvent([2, 3])},
                {id: "events", label: "Events", command: () => this.navigationEvent([2, 4])},
            ]
        },
        {
            id: "implementation", label: "Implementation Notes", command: () => this.navigationEvent([3]),
            items: [
                {id: "databases", label: "Databases", command: () => this.navigationEvent([3, 0])},
            ]
        }

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
                let el = document.getElementById(this.getAttribute(this.idPath, this.navTree, "id"))
                this.scroll(el)
            }, 200)
        else {
            let el = document.getElementById(this.getAttribute(this.idPath, this.navTree, "id"))
            this.scroll(el)
        }
    }

    scroll(el: HTMLElement | null) {
        console.log("test")
        if (el == null)
            return
        window.scrollTo({
            top: el.getBoundingClientRect().x + el.getBoundingClientRect().top,
            left: 0,
            behavior: "smooth"
        })

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
