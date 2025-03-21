import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NodeGroup, Option } from 'src/interfaces';
@Component({
  selector: 'app-cust-config',
  templateUrl: './cust-config.component.html',
  styleUrls: ['./cust-config.component.scss']
})
export class CustConfigComponent implements OnInit {

  constructor() { }
  @Output() navigate = new EventEmitter<string>();


  public config: Option[] = [];

  ngOnInit() {
    this.config = [
      {name: 'title', type: 'string', default: 'Drugst.One', description: 'The title which will be used in the header of the Drugst.One.'},
      {name: 'legendUrl', type: 'string', default: "''", description: 'Url to an image (png, jpg) which should be loaded as legend. If none is given, a default legend will be created.'},
      {name: 'legendClass', type: 'string', default: 'legend', description: 'Additional class to append to the legend.'},
      {name: 'legendPos', type: 'string', default: 'left', description: "Position of the legend. Can be either 'left', 'right' or 'off'."},
      {name: 'taskTargetName', type: 'string', default: 'Drug Target Search', description: 'Label of the button for the drug target search.'},
      {name: 'taskDrugName', type: 'string', default: 'Drug Search', description: 'Label of the button for the drug search.'},
      {name: 'showSidebar', type: 'boolean | string', default: 'left', description: "Position of the sidebar with the algorithms, node details, etc. If set to 'false', the sidebar will be hidden and the network will cover the complete Drugst.One panel."},
      {name: 'showLegendNodes', type: 'boolean', default: 'true', description: 'Only if legendUrl is not given. Controls the visibility of the node entries in the legend.'},
      {name: 'showLegendEdges', type: 'boolean', default: 'true', description: 'Only if legendUrl is not given. Controls the visibility of the edge entries in the legend.'},
      {name: 'showOverview', type: 'boolean', default: 'true', description: 'Show or hide the overview panel.'},
      {name: 'showQuery', type: 'boolean', default: 'true', description: 'Show or hide the query panel.'},
      {name: 'showItemSelector', type: 'boolean', default: 'true', description: 'Show or hide the node detail panel.'},
      {name: 'showSimpleAnalysis', type: 'boolean', default: 'false', description: 'Show or hide the panel with the quick analysis buttons.'},
      {name: 'showAdvAnalysis', type: 'boolean', default: 'true', description: 'Show or hide the panel with the advanced analysis buttons.'},
      {name: 'showSelection', type: 'boolean', default: 'true', description: 'Show or hide the panel with the selection table.'},
      { name: 'showEditNetwork', type: 'boolean', default: 'false', description: 'Show or hide the panel for adding and deleting nodes.' },
      { name: 'showPruning', type: 'boolean', default: 'false', description: 'Show or hide the panel for pruning the network based on properties.' },
      { name: 'showLogger', type: 'boolean', default: 'false', description: 'Show or hide the logger below the network window to track changes of the network.' },
      { name: 'showTasks', type: 'boolean', default: 'true', description: 'Show or hide the panel with the task table.' },
      { name: 'showViews', type: 'boolean', default: 'true', description: 'Show or hide the panel with the view table.' },
      { name: 'showNetworkMenu', type: 'boolean | string', default: 'right', description: "Show or hide the network menu. The network menu can be positioned with the values 'left' and 'right'." },
      { name: 'expandNetworkMenu', type: 'boolean', default: 'true', description: "Indicates whether the network menu should be open or closed when the Drugst.One component is loaded." },
      {name: 'showLegend', type: 'boolean', default: 'true', description: 'Show or hide the complete legend.'},
      {name: 'showNetworkMenuButtonExpression', type: 'boolean', default: 'true', description: 'Show or hide the button to load the expression data in the network menu.'},
      {name: 'showNetworkMenuButtonScreenshot', type: 'boolean', default: 'true', description: 'Show or hide the screenshot button in the network menu.'},
      {name: 'showNetworkMenuButtonExportGraphml', type: 'boolean', default: 'true', description: 'Show or hide the graphml-export button in the network menu.'},
      {name: 'showNetworkMenuButtonAdjacentDrugs', type: 'boolean', default: 'true', description: 'Show or hide the adjacent drugs button in the network menu.'},
      {name: 'activateNetworkMenuButtonAdjacentDrugs', type: 'boolean', default: 'false', description: 'Activates adjacent drugs by default once proteins or genes are loaded.'},
      {name: 'showNetworkMenuButtonCenter', type: 'boolean', default: 'true', description: 'Show or hide the button to re-center the network in the network menu.'},
      {name: 'showNetworkMenuButtonAnimation', type: 'boolean', default: 'true', description: 'Show or hide the button to toggle the network physics in the network menu.'},
      { name: 'showNetworkMenuButtonLayout', type: 'boolean', default: 'true', description: 'Show or hide the button to toggle the cellular component layout.' },
      { name: 'showNetworkMenuButtonOverlayDirectedEdges', type: 'boolean', default: 'true', description: 'Show or hide the button to toggle the overlay of directed edges from OmniPath.' },
      { name: 'showNetworkMenuButtonUpload', type: 'boolean', default: 'false', description: 'Show or hide the button to upload a network as .csv, .sif, .gt or .graphml.' },
      { name: 'showNetworkMenuButtonLabelIdspace', type: 'boolean', default: 'true', description: 'Show or hide the button to choose the ID space for the labels.' },
      {name: 'showNetworkMenuButtonAdjacentDisordersProteins', type: 'boolean', default: 'true', description: 'Show or hide the button to toggle the first neighbor disorders to the proteins in the network menu.'},
      {name: 'activateNetworkMenuButtonAdjacentDisorders', type: 'boolean', default: 'false', description: 'Activates adjacent disorders by default once proteins or genes are loaded.'},
      {name: 'showNetworkMenuButtonAdjacentDisordersDrugs', type: 'boolean', default: 'true', description: 'Show or hide the button to toggle the first neighbor disorders to the drugs in the network menu.'},
      {name: 'activateNetworkMenuButtonAdjacentDisorderDrugs', type: 'boolean', default: 'false', description: 'Activates adjacent drugs by default if drugs are loaded.'},
      {name: 'showConnectGenes', type: 'boolean', default: 'true', description: 'Show or hide the options to connect nodes in the sidebar.'},
      {name: 'networkMenuButtonAdjacentDrugsLabel', type: 'string', default: '', description: 'Label of the button to toggle the first neighbor drugs to the proteins in the network menu.'},
      {name: 'networkMenuButtonAdjacentDisordersProteinsLabel', type: 'string', default: '', description: 'Label of the button to toggle the first neighbor disorders to the proteins in the network menu.'},
      {name: 'networkMenuButtonAdjacentDisordersDrugsLabel', type: 'string', default: '', description: 'Label of the button to toggle the first neighbor disorders to the drugs in the network menu.'},
      {name: 'networkMenuButtonAnimationLabel', type: 'string', default: '', description: 'Label of the button to toggle the network physics in the network menu.'},
      { name: 'networkMenuButtonLayoutLabel', type: 'string', default: 'Layout', description: 'Label of the button to toggle the cellular component layout.' },
      { name: 'networkMenuButtonOverlayDirectedEdgesLabel', type: 'string', default: 'Overlay Directions', description: 'Label of the button to toggle the overlay with directed edges from OmniPath.' },
      { name: 'networkMenuButtonUploadLabel', type: 'string', default: 'Upload', description: 'Label of the button to upload a network as .csv, .sif, .gt or .graphml.' },
      {name: 'identifier', type: 'string', default: 'symbol', description: "The identifier type of the given node IDs. Can be one of 'symbol' (HUGO symbol), 'uniprot' (Uniprot AC), 'ensg' or 'ensembl' (Ensembl Gene ID), 'entrez' or 'ncbigene' (Entrez ID)."},
      { name: 'label', type: 'string', default: 'symbol', description: "The identifier type of the labels of the nodes. Can be one of 'symbol' (HUGO symbol), 'uniprot' (Uniprot AC), 'ensg' or 'ensembl' (Ensembl Gene ID), 'entrez' or 'ncbigene' (Entrez ID)." },
      {name: 'selfReferences', type: 'boolean', default: 'false', description: "Allow self referencing edges ('loops') in the network. If set to false, they will be removed from the dataset."},
      { name: 'customEdges', type: 'object', default: '{default: true, selectable: true}', description: "Options for edge functionality regarding the user input edges. Expects a dictionary like '{default: true, selectable: true}', indicating whether custom edges should be considered in the analysis algorithms and whether they should be selectable in the network." },
      {name: 'interactionDrugProtein', type: 'string', default: 'NeDRex', description: "The drug database which should be used to fetch the drug-protein interactions. Possible values are 'NeDRex', 'DrugBank', 'DrugCentral', 'ChEMBL', 'DGIdb'. For more information check Implementation > Data"},
      {name: 'interactionProteinProtein', type: 'string', default: 'NeDRex', description: "The database which should be used to fetch the protein-protein interactions. Possible values are 'NeDRex', 'BioGRID', 'IID', 'IntAct', 'STRING', 'APID', 'OmniPath'. For more information check Implementation > Data"},
      {name: 'indicationDrugDisorder', type: 'string', default: 'NeDRex', description: "The database which should be used to fetch the drug-disorder interactions. Possible values are 'NeDRex', 'CTD', 'DrugCentral', 'DrugBank'. For more information check Implementation > Data"},
      {name: 'associatedProteinDisorder', type: 'string', default: 'NeDRex', description: "The database which should be used to fetch the protein-disorder interactions. Possible values are 'NeDRex', 'DisGeNET', 'OMIM'. For more information check Implementation > Data"},
      {name: 'autofillEdges', type: 'boolean', default: 'false', description: "Automatically fetch interactions for all network nodes from the selected protein interaction database (see 'interactionDrugProtein')."},
      { name: 'physicsOn', type: 'boolean', default: 'false', description: 'Sets initial state of the network interaction physics.' },
      { name: 'physicsInitial', type: 'boolean', default: 'true', description: 'Whether or not to run initial layouting on the network before visualizing. This setting is always turned off for big networks (> 100 nodes or > 100 edges) to prevent long loading times.' },
      {name: 'nodeShadow', type: 'boolean', default: 'true', description: 'Turn the shadows of the network nodes on or off.'},
      {name: 'edgeShadow', type: 'boolean', default: 'true', description: 'Turn the shadows of the network edges on or off.'},
      { name: 'reviewed', type: 'boolean', default: 'false', description: 'Only consider reviewed proteins.' },
      { name: 'calculateProperties', type: 'boolean', default: 'false', description: 'Automatically calculate the following properties for each node: degree in network, degree in PPI, SPD (Subnetwork Participation Degree), local clustering coefficient.' },
      {name: 'licensedDatasets', type: 'boolean', default: 'false', description: 'Indicates whether licenced data should be used. If set to true, users will have to accept the terms of usage for the licenced data. For more information check Implementation > Data'},
      {name: 'groups', type: 'object', default: "see 'Raw JSON'", description: "Groups ('nodeGroups' and 'edgeGroups') which define the style for the network nodes. Every node in the network will be assigned to one of the node groups. The styles of the default node groups can be overwritten here. For more information see 'Groups'."},
      {name: 'algorithms', type: 'object', default: "see 'Raw JSON'", description: 'List of algorithms which should be available for selection to the user.'},
    ]
  }
}
