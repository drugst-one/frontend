import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/services/theme.service';
import {RequestService} from "src/app/services/requestService";

@Component({
    selector: 'app-impl-data',
    templateUrl: './impl-data.component.html',
    styleUrls: ['./impl-data.component.scss']
})
export class ImplDataComponent implements OnInit {


    @Input() api: string = ''

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
    }

    public descriptionMap = {
        NeDRex: 'NeDRex is a network medicine platform for disease module identification and drug repurposing.'
        ,
        BioGRID: 'BioGRID is a biomedical interaction repository with data compiled through comprehensive curation efforts.',
        IID: 'IID is the integrated interactions database containing detected and predicted data.',
        IntAct: 'IntAct is a PPI database containing interactions from literature curation of user submissions.'
        ,
        STRING: 'STRING is a protein-protein interaction database with interactions computed by combining the probabilities from the different evidence channels.'
        ,
        APID: 'APID unifies PPIs from primary databases of molecular interactions (BIND, BioGRID, DIP, HPRD, IntAct, MINT) and also from experimentally resolved 3D structures (PDB).'
        ,
        DrugCentral: 'DrugCentral is an online resource for drug related data like structure, bioactivity, regulatory, pharmacologic action and indications for active pharmaceutical ingredients approved by FDA and other regulatory agencies.',
        Chembl: 'ChEMBL is a database of bioactive drug-like small molecules, abstracted and curated from the primary scientific literature.'
        ,
        DGIdb: 'DGIdb contains information on drug-gene interactions and the druggable genome, mined from over thirty trusted sources.'
        ,
        DisGeNET: 'DisGeNET is a discovery platform containing one of the largest publicly available collections of genes and variants associated to human diseases.',
        CTD: 'CTD is ',
        DrugBank: 'TODO',
        OMIM: 'TODO'
    }

    constructor(public themeService: ThemeService, public drugstone: RequestService) {
    }

    public typeFormatter(type: string): string {
        switch (type) {
            case 'Protein-Drug':
                return '<span class="badge bg-danger">Protein-Drug</span>'
            case 'Protein-Protein':
                return '<span class="badge bg-success">Protein-Protein</span>'
            case 'Protein-Disorder':
                return '<span class="badge bg-warning">Protein-Disorder</span>'
            case 'Drug-Disorder':
                return '<span class="badge bg-info">Drug-Disorder</span>'
            default:
                return `<span class="badge bg-primary">${type}</span>`
        }
    }


    public dataSourcesUnlicenced = [
        {
            link: 'https://chembl.gitbook.io/chembl-interface-documentation/',
            name: 'Chembl',
            version: 'tbi',
            type: ['Protein-Drug'],
            description: 'ChEMBL is a database of bioactive drug-like small molecules, abstracted and curated from the primary scientific literature.'
        },
        {
            link: 'https://www.dgidb.org/',
            name: 'DGIdb',
            version: 'tbi',
            type: ['Protein-Drug'],
            description: 'DGIdb contains information on drug-gene interactions and the druggable genome, mined from over thirty trusted sources.'
        },
        {
            link: 'https://nedrex.net/',
            name: 'NeDRex',
            version: 'tbi',
            type: ['Protein-Drug', 'Protein-Protein', 'Drug-Disorder', 'Protein-Disorder'],
            description: 'NeDRex is a network medicine platform for disease module identification and drug repurposing.'
        },
        {
            link: 'https://string-db.org/',
            name: 'STRING',
            version: 'tbi',
            type: ['Protein-Protein'],
            description: 'STRING is a protein-protein interaction database with interactions computed by combining the probabilities from the different evidence channels.'
        },
        {
            link: 'https://thebiogrid.org/',
            name: 'BioGRID',
            version: 'tbi',
            type: ['Protein-Protein'],
            description: 'BioGRID is a biomedical interaction repository with data compiled through comprehensive curation efforts'
        },
        {
            link: 'http://cicblade.dep.usal.es:8080/APID/init.action',
            name: 'APID',
            version: 'tbi',
            type: ['Protein-Protein'],
            description: 'APID unifies PPIs from primary databases of molecular interactions (BIND, BioGRID, DIP, HPRD, IntAct, MINT) and also from experimentally resolved 3D structures (PDB).'
        },
        {
            link: 'https://www.disgenet.org/',
            name: 'DisGeNET',
            version: 'tbi',
            type: ['Protein-Disorder'],
            description: 'DisGeNET is a discovery platform containing one of the largest publicly available collections of genes and variants associated to human diseases.'
        }
    ]

    public dataSourcesLicenced = [
        {
            link: 'https://go.drugbank.com/',
            name: 'DrugBank',
            version: 'tbi',
            type: ['Protein-Drug', 'Drug-Disorder'],
            description: 'DrugBank is a bioinformatics and cheminformatics resource containing information on drugs and drug targets.'
        },
        {
            link: 'https://nedrex.net/',
            name: 'NeDRex',
            version: 'tbi',
            type: ['Protein-Drug', 'Protein-Protein', 'Drug-Disorder', 'Protein-Disorder'],
            description: 'NeDRex is a network medicine platform for disease module identification and drug repurposing.'
        },
    ]

    ngOnInit(): void {
        this.getDatasources()
    }

    async getDatasources() {
        let typeMap = {
            'protein-protein': 'Protein-Protein',
            'protein-drug': 'Protein-Drug',
            'protein-disorder': 'Protein-Disorder',
            'drug-disorder': 'Drug-Disorder'
        }
        this.drugstone.getDatasources(this.api).then(response => {
            this.dataSourcesLicenced = []
            this.dataSourcesUnlicenced = []
            let sources: object = {}

            Object.keys(response).forEach(type => {
                // @ts-ignore
                response[type].forEach(source => {
                    // @ts-ignore
                    source.name = this.nameMap[source.name.toLowerCase()]
                    let key = source.name + "_" + source.licenced
                    // @ts-ignore
                    if (sources[key] == null) {
                        // @ts-ignore
                        sources[key] = source
                        // @ts-ignore
                        sources[key].type = []
                        // @ts-ignore
                        sources[key].description = this.descriptionMap[source.name]
                    }
                    // @ts-ignore
                    sources[key].type.push(typeMap[type])
                })
            })

            console.log(sources)
            // @ts-ignore
            let nedrexUrl = sources[this.nameMap['nedrex']+"_false"].link
            Object.values(sources).forEach(source => {
                if (!source.licenced)
                    this.dataSourcesUnlicenced.push(source)
                else {
                    // @ts-ignore
                    // if (sources[source.name + "_false"]) {
                    //     // @ts-ignore
                    //     if (sources[source.name + "_false"].link === nedrexUrl && source.link === nedrexUrl)
                    //         this.dataSourcesLicenced.push(source)
                    // } else
                        this.dataSourcesLicenced.push(source)

                }
            })

        })
    }

}
