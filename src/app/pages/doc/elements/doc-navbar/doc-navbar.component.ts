import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from "primeng/api";
import { ThemeService } from "../../../../services/theme.service";


@Component({
  selector: 'app-doc-navbar',
  templateUrl: './doc-navbar.component.html',
  styleUrls: ['./doc-navbar.component.scss']
})
export class DocNavbarComponent implements OnInit {

  @Input() model: MenuItem[] = []
  @Input() selected: number[] = [0]

  @Output() navigationEvent = new EventEmitter<String[]>()

  public elements = [
    {
      name: 'Get Started', target: 'nav_get_started', elements: [
        { name: 'Basic Integration', anchor: 'basic_integration' },
        { name: 'AngularJS', anchor: 'angularjs_setup' },
        { name: 'Django', anchor: 'djano_setup' },
        { name: 'Vue.JS', anchor: 'vuejs_setup' },
        { name: 'R-Shiny', anchor: 'rshiny_setup' },
        { name: 'Other Frameworks', anchor: 'other_frameworks' },
        { name: 'From Scratch', anchor: 'from_scratch' },
      ]
    },
    {
      name: 'The Drugst.One UI', target: 'nav_drugstone_ui', elements: [
        { name: 'Network', anchor: 'drugstone_ui_network' },
        { name: 'Panels', anchor: 'drugstone_ui_panels' },
        { name: 'Network Menu', anchor: 'drugstone_ui_footer_bar' },
        { name: 'Task Execution', anchor: 'drugstone_ui_task_execution' },
        { name: 'Analysis Window', anchor: 'drugstone_ui_analysis_window' },
      ]
    },
    {
      name: 'Customize', target: 'nav_customize_drugstone', elements: [
        { name: 'General', anchor: 'customize_general' },
        { name: 'Config Object', anchor: 'customize_config' },
        { name: 'Group Configuration', anchor: 'customize_group_configuration' },
        { name: 'Network', anchor: 'customize_network' },
        { name: 'Version Selection', anchor: 'customize_version_selection' },
        { name: 'Style Adjustments', anchor: 'customize_style_adjustments' },
        { name: 'Events', anchor: 'customize_events' },
      ]
    },
    {
      name: 'Standalone', target: 'nav_standalone', elements: [
        { name: 'Buttons', anchor: 'standalone_buttons' },
        { name: 'Options', anchor: 'standalone_options' },
        { name: 'API', anchor: 'standalone_api' },
      ]
    },
    {
      name: 'Implementation', target: 'nav_implementation', elements: [
        { name: 'Datasources', anchor: 'implementation_datasources' },
        { name: 'Network', anchor: 'implementation_visjs' },
        { name: 'Algorithms', anchor: 'implementation_algorithms' },
      ]
    },
    {
      name: 'Other', target: 'nav_other', elements: [
        {name: 'Python Package', anchor: 'python_package'},
        { name: 'Contact', anchor: 'contact_us' },
        { name: 'FAQ', anchor: 'faq' },
      ]
    }
  ]

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
