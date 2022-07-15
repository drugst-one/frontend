import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-standalone-url',
    templateUrl: './standalone-url.component.html',
    styleUrls: ['./standalone-url.component.scss']
})
export class StandaloneUrlComponent implements OnInit {

    @Input() host: string = ""
    @Input() backend: string=""
    getRequest: string = ""
    postCreate: string = ""
    postLoad: string =""
    getConfig = [
        {name: "nodes", type: "list", default: "[]", description: "Comma separated list of node ids"},
        {
            name: "edges",
            type: "list",
            default: "[]",
            description: "Comma separated list of node id pairs. Pairs are separated by space which is encoded as \"%20\" in the URL."
        },
        {
            name: "identifier",
            type: "string",
            default: "symbol",
            description: "Can be one of the supported identifier types to map gene names. Options are: \"symbol\" (gene Symbol), \"uniprot\" (Uniprot accession number), \"ensg\" (Ensembl Gene ID)."
        },
        {
            name: "interactionProteinProtein",
            type: "string",
            default: "STRING",
            description: "The database which should be used to fetch the protein-protein interactions. Possible values are \"STRING\", \"BioGRID\", \"APID\"."
        },
        {
            name: "interactionDrugProtein",
            type: "string",
            default: "DrugBank",
            description: "The drug database which should be used to fetch the drug-protein interactions. Possible values are \"DrugBank\", \"Chembl\", \"DGIdb\"."
        },
        {
            name: "autofillEdges",
            type: "boolean",
            default: "true",
            description: "Switch to activate or deactivate the loading of known interaction edges from the selected interaction database."
        },
    ]

    constructor() {
    }

    ngOnInit(): void {
        this.getRequest = this.host + "?nodes=PTEN,TP53&edges=PTEN%20TP53&autofillEdges=false"
        this.postCreate="" +
            "let networkID = post(\n" +
            "   \""+this.backend+"create_network\",\n" +
            "   {\n" +
            "       network: {nodes: [...], edges: [...]},\n" +
            "       groups: {...}\n" +
            "       config: {...}\n" +
            "   }\n" +
            ")"
        this.postLoad=this.host+"?id=18baf56f4fca46e3952eaad97681f658"
    }

    @Output() navigate = new EventEmitter<string>();

    navigateTo(id: string): void {
        this.navigate.emit(id)
    }


}
