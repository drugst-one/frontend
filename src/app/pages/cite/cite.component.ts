import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: ['./cite.component.scss']
})
export class CiteComponent implements OnInit {

  constructor() { }

  public bibtex = `@misc{maier2023drugstone,
      title={Drugst.One -- A plug-and-play solution for online systems medicine and network-based drug repurposing}, 
      author={Andreas Maier and Michael Hartung and Mark Abovsky and Klaudia Adamowicz and Gary D. Bader and Sylvie Baier and David B. Blumenthal and Jing Chen and Maria L. Elkjaer and Carlos Garcia-Hernandez and Markus Hoffmann and Igor Jurisica and Max Kotlyar and Olga Lazareva and Hagai Levi and Markus List and Sebastian Lobentanzer and Joseph Loscalzo and Noel Malod-Dognin and Quirin Manz and Julian Matschinske and Mhaned Oubounyt and Alexander R. Pico and Rudolf T. Pillich and Julian M. Poschenrieder and Dexter Pratt and Nataša Pržulj and Sepideh Sadegh and Julio Saez-Rodriguez and Suryadipto Sakar and Gideon Shaked and Ron Shamir and Nico Trummer and Ugur Turhan and Ruisheng Wang and Olga Zolotareva and Jan Baumbach},
      year={2023},
      eprint={2305.15453},
      archivePrefix={arXiv},
      primaryClass={q-bio.QM}
}`

  ngOnInit(): void {
  }

}
