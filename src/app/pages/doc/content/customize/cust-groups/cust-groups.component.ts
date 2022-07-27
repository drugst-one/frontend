import { Component, OnInit } from '@angular/core';
import { NodeGroup, Option } from 'src/interfaces';

@Component({
  selector: 'app-cust-groups',
  templateUrl: './cust-groups.component.html',
  styleUrls: ['./cust-groups.component.scss']
})
export class CustGroupsComponent implements OnInit {

  constructor() { }

  public requiredOptionsEdgeGroup: Option[] = [];
  public requiredOptionsNodeGroup: Option[] = [];
  public defaultNodeGroups: NodeGroup[] = [];

  ngOnInit(): void {

    this.requiredOptionsEdgeGroup = [
      {name: 'groupName', type: 'string', default: '', description: 'The name of the edge group as it appears in the legend.'},
      {name: 'color', type: 'string | object', default: '', description: 'The color of edges in this group. Expects a color string (hexacode, rgb, rgba).'},
    ]

    this.requiredOptionsNodeGroup = [
      {name: 'groupName', type: 'string', default: '', description: 'The name of the node group as it appears in the legend.'},
      {name: 'type', type: 'string', default: '', description: 'The name of the type of node as it appears in the node detail panel.'},
      {name: 'shape', type: 'string', default: '', description: 'The shape of all nodes belonging to this group. Can be one of "circle", "triangle", "star", "square", "image", "text", "ellipse", "box", "diamond", "dot".'},
      {name: 'color', type: 'string | object', default: '', description: 'The color of nodes in this group. Can be either a color string (hexacode, rgb, rgba) or an object based on the Vis.js node color property.'},
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
