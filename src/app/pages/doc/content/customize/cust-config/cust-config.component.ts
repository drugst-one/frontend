import { Component, OnInit } from '@angular/core';

interface Option {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface NodeGroup {
  name: string;
  function: string;
}

@Component({
  selector: 'app-cust-config',
  templateUrl: './cust-config.component.html',
  styleUrls: ['./cust-config.component.scss']
})
export class CustConfigComponent implements OnInit {

  constructor() { }


  public config: Option[] = [];
  public defaultNodeGroups: NodeGroup[] = [];
  public requiredOptionsNodeGroup: Option[] = [];
  public requiredOptionsEdgeGroup: Option[] = [];

  ngOnInit() {
    this.config = [
      {name: 'title', type: 'string', default: 'Drugst.One', description: 'The title which will be used in the header of the Drugst.One.'},
      {name: 'legendUrl', type: 'string', default: '""', description: 'Url to an image (png, jpg) which should be loaded as legend. If none is given, a default legend will be created.'},
      {name: 'legendClass', type: 'string', default: 'legend', description: 'Additional class to append to the legend.'},
      {name: 'legendPos', type: 'string', default: 'left', description: 'Position of the legend. Can bei either "left" or "right".'},
      {name: 'taskName', type: 'string', default: 'Drug Target Search', description: 'Label of the button for the drug target search.'},
      {name: 'taskDrugName', type: 'string', default: 'Drug Search', description: 'Label of the button for the drug search.'},
      {name: 'showLegendNodes', type: 'boolean', default: 'true', description: 'Only if legendUrl is not given. Controls the visibility of the node entries in the legend.'},
      {name: 'showLegendEdges', type: 'boolean', default: 'true', description: 'Only if legendUrl is not given. Controls the visibility of the edge entries in the legend.'},
      {name: 'showLeftSidebar', type: 'boolean', default: 'true', description: 'Show or hide the complete left sidebar.'},
      {name: 'showRightSidebar', type: 'boolean', default: 'true', description: 'Show or hide the complete right sidebar.'},
      {name: 'showOverview', type: 'boolean', default: 'true', description: 'Show or hide the overview panel.'},
      {name: 'showQuery', type: 'boolean', default: 'true', description: 'Show or hide the query panel.'},
      {name: 'showItemSelector', type: 'boolean', default: 'true', description: 'Show or hide the node detail panel.'},
      {name: 'showSimpleAnalysis', type: 'boolean', default: 'false', description: 'Show or hide the panel with the quick analysis buttons.'},
      {name: 'showAdvAnalysis', type: 'boolean', default: 'true', description: 'Show or hide the panel with the advanced analysis buttons.'},
      {name: 'showSelection', type: 'boolean', default: 'true', description: 'Show or hide the panel with the selection table.'},
      {name: 'showTasks', type: 'boolean', default: 'true', description: 'Show or hide the panel with the task table.'},
      {name: 'showFooter', type: 'boolean', default: 'true', description: 'Show or hide the network footer.'},
      {name: 'showLegend', type: 'boolean', default: 'true', description: 'Show or hide the complete legend.'},
      {name: 'showFooterButtonExpression', type: 'boolean', default: 'true', description: 'Show or hide the button to load the expression data in the network footer.'},
      {name: 'showFooterButtonScreenshot', type: 'boolean', default: 'true', description: 'Show or hide the screenshot button in the network footer.'},
      {name: 'showFooterButtonExportGraphml', type: 'boolean', default: 'true', description: 'Show or hide graphml-export button in the network footer.'},
      {name: 'identifier', type: 'string', default: 'symbol', description: 'The identifier type of the given node IDs. Can be one of "symbol" (HUGO symbol), "uniprot" (Uniprot AC), "ensg" (Ensembl Gene ID).'},
      {name: 'interactionDrugProtein', type: 'string', default: 'DrugBank', description: 'The drug database which should be used to fetch the drug-protein interactions. Possible values are "DrugBank", "Chembl", "DGIdb".'},
      {name: 'interactionProteinProtein', type: 'string', default: 'STRING', description: 'The database which should be used to fetch the protein-protein interactions. Possible values are "STRING", "BioGRID", "APID".'},
      {name: 'autofillEdges', type: 'boolean', default: 'false', description: 'Automatically fetch interactions for all network nodes from the selected protein interaction database (see "interactionDrugProtein").'},
      {name: 'nodeShadow', type: 'boolean', default: 'true', description: 'Turn the shadows of the network nodes on or off.'},
      {name: 'edgeShadow', type: 'boolean', default: 'true', description: 'Turn the shadows of the network edges on or off.'},
      {name: 'nodeGroups', type: 'object', default: 'see "Raw JSON"', description: 'Node groups which define the style for the network nodes. Every node in the network will be assigned to one of the node groups. The styles of the default node groups can be overwritten here. For more information see "Groups".'},
      {name: 'edgeGroups', type: 'object', default: 'see "Raw JSON"', description: 'The same as "nodeGroups" but for the network edges (see "nodeGroups"). For more information see "Groups".'},
    ]

    this.defaultNodeGroups = [
      {name: 'default', function: 'Fallback option for all nodes without any group assigned.'},
      {name: 'foundNode', function: 'Node group for all nodes found by Drugst.One that are not drugs (either drug target nodes or nodes that connect drugs to the network).'},
      {name: 'foundDrug', function: 'Node group for all drug nodes found by Drugst.One. Drugs can either be found via the drug search or via the "Drugs" button in the footer of the network.'},
      {name: 'seedNode', function: 'Style to highlight seed nodes in the task result used as input for the particular task.'},
      {name: 'selectedNode', function: 'Style for the nodes that are selected by the user as seeds nodes.'},
    ]

  }

}
