import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeComponent} from "../../components/code/code.component";
import {Card} from "primeng/card";

@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: ['./cite.component.scss'],
  standalone: true,
  imports: [CommonModule, CodeComponent, Card]
})
export class CiteComponent implements OnInit {

  @Input() theme = {};
  @Input() api = "";

  constructor() { }

  public plain = `Maier A, Hartung M, Baumbach J, et al. Drugst.One — a plug-and-play solution for online systems medicine and network-based drug repurposing, Nucleic Acids Research, 2024; gkae388, https://doi.org/10.1093/nar/gkae388`

  public bibtex = `@article{10.1093/nar/gkae388,
    author = {Maier, Andreas and Hartung, Michael and Abovsky, Mark and Adamowicz, Klaudia and Bader, Gary D and Baier, Sylvie and Blumenthal, David B and Chen, Jing and Elkjaer, Maria L and Garcia-Hernandez, Carlos and Helmy, Mohamed and Hoffmann, Markus and Jurisica, Igor and Kotlyar, Max and Lazareva, Olga and Levi, Hagai and List, Markus and Lobentanzer, Sebastian and Loscalzo, Joseph and Malod-Dognin, Noel and Manz, Quirin and Matschinske, Julian and Mee, Miles and Oubounyt, Mhaned and Pastrello, Chiara and Pico, Alexander R and Pillich, Rudolf T and Poschenrieder, Julian M and Pratt, Dexter and Pržulj, Nataša and Sadegh, Sepideh and Saez-Rodriguez, Julio and Sarkar, Suryadipto and Shaked, Gideon and Shamir, Ron and Trummer, Nico and Turhan, Ugur and Wang, Rui-Sheng and Zolotareva, Olga and Baumbach, Jan},
    title = "{Drugst.One — a plug-and-play solution for online systems medicine and network-based drug repurposing}",
    journal = {Nucleic Acids Research},
    pages = {gkae388},
    year = {2024},
    month = {05},
    abstract = "{In recent decades, the development of new drugs has become increasingly expensive and inefficient, and the molecular mechanisms of most pharmaceuticals remain poorly understood. In response, computational systems and network medicine tools have emerged to identify potential drug repurposing candidates. However, these tools often require complex installation and lack intuitive visual network mining capabilities. To tackle these challenges, we introduce Drugst.One, a platform that assists specialized computational medicine tools in becoming user-friendly, web-based utilities for drug repurposing. With just three lines of code, Drugst.One turns any systems biology software into an interactive web tool for modeling and analyzing complex protein-drug-disease networks. Demonstrating its broad adaptability, Drugst.One has been successfully integrated with 21 computational systems medicine tools. Available at https://drugst.one, Drugst.One has significant potential for streamlining the drug discovery process, allowing researchers to focus on essential aspects of pharmaceutical treatment research.}",
    issn = {0305-1048},
    doi = {10.1093/nar/gkae388},
    url = {https://doi.org/10.1093/nar/gkae388},
    eprint = {https://academic.oup.com/nar/advance-article-pdf/doi/10.1093/nar/gkae388/57850045/gkae388.pdf},
}`

  public dream_plain = `Spindler, L. M., Kersting, J., Manz, Q., Hartung, M., Maier, A., Mamdouh, Z. M., Casas, A. I., Baumbach, J., & List, M. (2026). Drugst.One DREAM—Drug repurposing through expert annotation and modification. British Journal of Pharmacology, 1–14. https://doi.org/10.1111/bph.70495`

  public dream_bibtex = `@article{10.1111/bph.70495,
    author = {Spindler, Lisa M. and Kersting, Johannes and Manz, Quirin and Hartung, Michael and Maier, Andreas and Mamdouh, Zeinab M. and Casas, Ana I. and Baumbach, Jan and List, Markus},
    title = "{Drugst.One DREAM—Drug repurposing through expert annotation and modification}",
    journal = "{British Journal of Pharmacology}",
    volume = {n/a},
    number = {n/a},
    pages = {},
    keywords = "{bioinformatics, computational pharmacology, intracellular signalling, repurposing, systems pharmacology}",
    doi = {https://doi.org/10.1111/bph.70495},
    url = {https://bpspubs.onlinelibrary.wiley.com/doi/abs/10.1111/bph.70495},
    eprint = {https://bpspubs.onlinelibrary.wiley.com/doi/pdf/10.1111/bph.70495},
    abstract = "{Background and Purpose Complex diseases often lack an actionable understanding of their underlying causal biological mechanisms, which leads to treating symptoms rather than causes. Network and systems medicine define disease mechanisms through disease-associated genes, their encoded proteins and their protein–protein interactions (PPIs), thus forming disease modules. Complex diseases can be subdivided into actionable causal mechanisms for potential precision and curative therapy by repurposing small-molecule drugs for new indications. However, current computational methods for disease module construction overlook pathway annotations, cellular compartments and directed PPIs. Consequently, disease modules require contextual refinement to identify dysregulations, select appropriate drug classes and eliminate promiscuous proteins. Experimental Approach Here, we present Drugst.One DREAM, which equips biomedical experts with a user-friendly toolbox for disease module refinement that does not require bioinformatics expertise. This extension of the web tool Drugst.One introduces network editing features. Users can refine PPI modules supported by pathway enrichment analysis and network clustering. Dedicated graph layouts highlight subcellular localisation and causal relationships queried from OmniPath. Key Results We demonstrate our tool by reproducing a previously described NOX5-containing module and refining an algorithmically inferred candidate module for Crohn’s disease, showcasing its effectiveness in refining disease modules for a broad user group in pharmacology and biomedical research. Conclusion and Implications The Drugst.One DREAM extension closes an important gap in the network medicine tool landscape by offering experts a user-friendly option for refining disease modules.}"
}`

  ngOnInit(): void {
  }

}
