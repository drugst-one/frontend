import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tools-banner',
    templateUrl: './tools-banner.component.html',
    styleUrls: ['./tools-banner.component.scss']
})
export class ToolsBannerComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    public tool_list = [
        {label: "BiCoN", link: "https://exbio.wzw.tum.de/bicon/"},
        {label: "BioCypher", link: "https://biocypher.org/", icon:"assets/tools/biocypher.png"},
        // {label: "DOMINO", link: "http://domino.cs.tau.ac.il/", icon: "assets/tools/domino.png"},
        {label: "G-Browser", link: "https://exbio.wzw.tum.de/genome-browser/"},
        {label: "GraphFusion", link: "https://github.com/CarlosJesusGH/GraphFusion"},
        {label: "GraphSimViz", link: "https://graphsimviz.net/", icon: "assets/tools/graphsimviz.png"},
        {label: "HitSeekR", link: "https://exbio.wzw.tum.de/hitseekr/", icon: "assets/tools/hitseekr.png"},
        {label: "Interactive Enrichment Analysis", link: "https://github.com/gladstone-institutes/Interactive-Enrichment-Analysis/", font_size: "20pt"},
        {label: "mirDIP", link: "https://ophid.utoronto.ca/mirDIP/"},
        {label: "NAViGaTOR", link: "https://ophid.utoronto.ca/navigator/", icon: "assets/tools/navigator.png"},
        {label: "NDEx IQuery", link: "https://www.ndexbio.org/iquery/", icon: "assets/tools/iquery.png"},
        {label: "Epistasis Disease Atlas", link: "https://epistasis-disease-atlas.com", font_size: "20pt"},
        {label: "NDEx", link: "https://ndexbio.org/#/home", icon: "assets/tools/ndex.png"},
        {label: "NeEDL - R Shiny App", link: "https://hub.docker.com/r/bigdatainbiomedicine/needl", font_size: "20pt"},
        {label: "openPIP", link: "https://github.com/BaderLab/openPIP", icon: "assets/tools/openpip.png"},
        {label: "pathDIP", link: "https://ophid.utoronto.ca/pathDIP", icon: "assets/tools/pathdip.jpg"},
        {label: "Pathway Figure OCR ", link: "https://pfocr.wikipathways.org", icon: "assets/tools/pfocr.png", width: 100},
        {label: "ProHarMeD", link: "https://proharmed.zbh.uni-hamburg.de/", icon: "assets/tools/proharmed.png"},
        {label: "ROBUST-Web", link: "https://robust-web.net/"},
        {label: "SCANet", link: "https://pypi.org/project/scanet/"},
        {label: "Seed Connector Algorithm", link: "https://github.com/bwh784/SCA", font_size: "20pt"},
        {label: "UnPaSt", link: "https://unpast.zbh.uni-hamburg.de", icon: "assets/tools/unpast.png", width: 120},
        {label: "WikiPathways", link: "https://wikipathways.org", icon: "assets/tools/wikipathways.svg"},

    ]
}
