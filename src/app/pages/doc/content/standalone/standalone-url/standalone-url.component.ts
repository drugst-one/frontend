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
            description: "Can be one of the supported identifier types to map gene names. Options are: \"symbol\" (gene Symbol), \"uniprot\" (Uniprot accession number), \"ensg\" (Ensembl Gene ID), \"entrez\" (Entrez ID)."
        },
        {
            name: "licensedDatasets",
            type: "boolean",
            default: "false",
            description: "Use licensed versions of selected datasets if these should exist."
        },
        {
            name: "autofillEdges",
            type: "boolean",
            default: "false",
            description: "Enable to autofill protein interaction edges."
        },
        {
            name: "interactionProteinProtein",
            type: "string",
            default: "NeDRex",
            description: "The database which should be used to fetch the protein-protein interactions. Possible values are \"NeDRex\", \"IID\", \"IntAct\", \"STRING\", \"BioGRID\", \"APID\".  For more information check Implementation > Data"
        },
        {
            name: "interactionDrugProtein",
            type: "string",
            default: "NeDRex",
            description: "The drug database which should be used to fetch the drug-protein interactions. Possible values are \"NeDRex\", \"DrugBank\", \"DrugCentral\", \"ChEMBL\", \"DGIdb\".  For more information check Implementation > Data"
        },
        {
            name: "associatedProteinDisorder",
            type: "string",
            default: "NeDRex",
            description: "The database which should be used to fetch protein-disorder association edges. Possible values are \"NeDRex\", \"DisGeNET\", \"OMIM\".  For more information check Implementation > Data"
        },
        {
            name: "indicationDrugDisorder",
            type: "string",
            default: "NeDRex",
            description: "The database which should be used to fetch drug-disorder indication edges. Possible values are \"NeDRex\", \"CTD\", \"DrugCentral\", \"DrugBank\".  For more information check Implementation > Data"
        },
        {
            name: "activateNetworkMenuButtonAdjacentDrugs",
            type: "boolean",
            default: "false",
            description: "Enable to automatically show drug interacting with proteins."
        },
        {
            name: "activateNetworkMenuButtonAdjacentDisorders",
            type: "boolean",
            default: "false",
            description: "Enable to automatically show disorders linked to shown proteins."
        },
        {
            name: "activateNetworkMenuButtonAdjacentDisorderDrugs",
            type: "boolean",
            default: "false",
            description: "Enable to automatically show drugs for shown disorders."
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
