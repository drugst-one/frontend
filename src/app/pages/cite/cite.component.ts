import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: ['./cite.component.scss']
})
export class CiteComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
