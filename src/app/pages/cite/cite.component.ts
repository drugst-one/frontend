import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: ['./cite.component.scss']
})
export class CiteComponent implements OnInit {

  constructor() { }

  public plain = `Maier A, Hartung M, Baumbach J, et al. (2024) Drugst.One - A plug-and-play solution for online systems medicine and network-based drug repurposing. https://doi.org/10.1093/nar/gkae388`

  public bibtex = ` @ARTICLE{Maier2023-bw,
  title    = "{Drugst.One} - A plug-and-play solution for online systems
              medicine and network-based drug repurposing",
  author   = "Maier, Andreas and Hartung, Michael and Abovsky, Mark and
              Adamowicz, Klaudia and Bader, Gary D and Baier, Sylvie and
              Blumenthal, David B and Chen, Jing and Elkjaer, Maria L and
              Garcia-Hernandez, Carlos and Hoffmann, Markus and Jurisica, Igor
              and Kotlyar, Max and Lazareva, Olga and Levi, Hagai and List,
              Markus and Lobentanzer, Sebastian and Loscalzo, Joseph and
              Malod-Dognin, Noel and Manz, Quirin and Matschinske, Julian and
              Oubounyt, Mhaned and Pico, Alexander R and Pillich, Rudolf T and
              Poschenrieder, Julian M and Pratt, Dexter and Pr{\v z}ulj,
              Nata{\v s}a and Sadegh, Sepideh and Saez-Rodriguez, Julio and
              Sakar, Suryadipto and Shaked, Gideon and Shamir, Ron and Trummer,
              Nico and Turhan, Ugur and Wang, Ruisheng and Zolotareva, Olga and
              Baumbach, Jan",
  abstract = "In recent decades, the development of new drugs has become
              increasingly expensive and inefficient, and the molecular
              mechanisms of most pharmaceuticals remain poorly understood. In
              response, computational systems and network medicine tools have
              emerged to identify potential drug repurposing candidates.
              However, these tools often require complex installation and lack
              intuitive visual network mining capabilities. To tackle these
              challenges, we introduce Drugst.One, a platform that assists
              specialized computational medicine tools in becoming
              user-friendly, web-based utilities for drug repurposing. With
              just three lines of code, Drugst.One turns any systems biology
              software into an interactive web tool for modeling and analyzing
              complex protein-drug-disease networks. Demonstrating its broad
              adaptability, Drugst.One has been successfully integrated with 21
              computational systems medicine tools. Available at
              https://drugst.one, Drugst.One has significant potential for
              streamlining the drug discovery process, allowing researchers to
              focus on essential aspects of pharmaceutical treatment research.",
  journal  = "Nucleic Acids Research",
  volume   = "Web Server Issue",
  year     =  "in press",
  doi      = "10.1093/nar/gkae388"
}`

  ngOnInit(): void {
  }

}
