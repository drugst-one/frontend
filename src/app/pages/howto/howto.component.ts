import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
    selector: 'app-howto',
    templateUrl: './howto.component.html',
    styleUrls: ['./howto.component.scss']
})
export class HowtoComponent implements OnInit {
    @Input() public version = ""
    @Input() public theme = {}
    @Output() tabChangeEvent = new EventEmitter<number>();
    public general = {
        plugin: "",
        body: ""
    };
    public angular = {
        plugin: "",
        app: "",
        body: "",
    };

    public vue = {
        plugin: "",
        app: "",
        body: "",
    }

    constructor() {


    }

    tabChange(number: number) {
        this.tabChangeEvent.emit(number)
    }

    ngOnInit(): void {
        this.general.plugin = "" +
            "<head>\n" +
            "   <script src=\"https://cdn.jsdelivr.net/gh/AndiMajore/drugstone-releases@"+this.version+"/uhh/drugsTone.js\"></script>\n" +
            "   <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/AndiMajore/drugstone-releases@"+this.version+"/uhh/styles.css\">\n" +
            "</head>\n\n";
        this.general.body = "" +
            "<body>\n" +
            "   <network-expander></network-expander>\n" +
            "</body>\n"
        this.angular.plugin = this.general.plugin;
        this.angular.app="@NgModule({\n" +
            "   declarations: [],\n"+
            "   imports: [],\n"+
            "   bootstrap: [AppComponent],\n"+
            "   schemas: [CUSTOM_ELEMENTS_SCHEMA],\n" +
            "})"
        this.angular.body = "<network-expander></network-expander>";
        this.vue.plugin = this.angular.plugin;
        this.vue.body = this.angular.body;
        this.vue.app = ""+
            "module.exports = {\n"+
            "   externals: {\n"+
            "      'network-expander': 'ELEMENT'\n"+
            "   }\n"+
            "}"
    }

    getTheme() {
        let colors = JSON.stringify(Object.keys(this.theme).map(key => {
            let o = {}
            // @ts-ignore
            o[key] = this.theme[key].color;
            return o
        }));
        return ":root {\n" + colors.split("},").join(";\n   ").split("\"").join("").split("{").join("").replace("[", "   ").replace("]", "").replace("}", ";\n}").split(":").join(": ")

    }
}
