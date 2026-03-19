import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NavigationEnd, Router} from "@angular/router";
import { CommonModule } from '@angular/common';
import { DocNavbarComponent } from './elements/doc-navbar/doc-navbar.component';
import { DocHeaderComponent } from '../../components/documentation/doc-header/doc-header.component';
import { DocSubheaderComponent } from '../../components/documentation/doc-subheader/doc-subheader.component';
import { BasicsComponent } from './content/start/basics/basics.component';
import { AngularComponent } from './content/start/angular/angular.component';
import { DjangoComponent } from './content/start/django/django.component';
import { VuejsComponent } from './content/start/vuejs/vuejs.component';
import { RshinyComponent } from './content/start/rshiny/rshiny.component';
import { OtherComponent } from './content/start/other/other.component';
import { BrowserCompatibilitiesComponent } from './content/start/browser-compatibilities/browser-compatibilities.component';
import { FromScratchComponent } from './content/start/from-scratch/from-scratch.component';
import { UiComponent } from './content/ui/ui.component';
import { UiNetworkComponent } from './content/ui/ui-network/ui-network.component';
import { UiPanelsComponent } from './content/ui/ui-panels/ui-panels.component';
import { UiFooterComponent } from './content/ui/ui-footer/ui-footer.component';
import { UiTasksComponent } from './content/ui/ui-tasks/ui-tasks.component';
import { UiAnalysisComponent } from './content/ui/ui-analysis/ui-analysis.component';
import { DrugstoneDreamFeaturesComponent } from './content/drugstone-dream/drugstone-dream-features/drugstone-dream-features.component';
import { CustGeneralComponent } from './content/customize/cust-general/cust-general.component';
import { CustConfigComponent } from './content/customize/cust-config/cust-config.component';
import { CustGroupsComponent } from './content/customize/cust-groups/cust-groups.component';
import { CustNetworkComponent } from './content/customize/cust-network/cust-network.component';
import { CustVersionComponent } from './content/customize/cust-version/cust-version.component';
import { CustStyleComponent } from './content/customize/cust-style/cust-style.component';
import { CustEventsComponent } from './content/customize/cust-events/cust-events.component';
import { StandaloneDocComponent } from './content/standalone/standalone-doc.component';
import { StandaloneButtonsComponent } from './content/standalone/standalone-buttons/standalone-buttons.component';
import { StandaloneOptionsComponent } from './content/standalone/standalone-options/standalone-options.component';
import { StandaloneUrlComponent } from './content/standalone/standalone-url/standalone-url.component';
import { ImplGitComponent } from './content/implementation/impl-git/impl-git.component';
import { ImplDataComponent } from './content/implementation/impl-data/impl-data.component';
import { ImplVisComponent } from './content/implementation/impl-vis/impl-vis.component';
import { ImplAlgorithmsComponent } from './content/implementation/impl-algorithms/impl-algorithms.component';
import { PythonPackageComponent } from './content/other/python-package/python-package.component';
import { EulaComponent } from './content/other/eula/eula.component';
import { ContactComponent } from './content/other/contact/contact.component';
import { PrivacyPolicyComponent } from './content/other/privacy-policy/privacy-policy.component';
import { FaqComponent } from './content/other/faq/faq.component';
import {AngularNewComponent} from "./content/start/angular-new/angular-new.component";

@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        DocNavbarComponent,
        DocHeaderComponent,
        DocSubheaderComponent,
        BasicsComponent,
        AngularComponent,
        AngularNewComponent,
        DjangoComponent,
        VuejsComponent,
        RshinyComponent,
        OtherComponent,
        BrowserCompatibilitiesComponent,
        FromScratchComponent,
        UiComponent,
        UiNetworkComponent,
        UiPanelsComponent,
        UiFooterComponent,
        UiTasksComponent,
        UiAnalysisComponent,
        DrugstoneDreamFeaturesComponent,
        CustGeneralComponent,
        CustConfigComponent,
        CustGroupsComponent,
        CustNetworkComponent,
        CustVersionComponent,
        CustStyleComponent,
        CustEventsComponent,
        StandaloneDocComponent,
        StandaloneButtonsComponent,
        StandaloneOptionsComponent,
        StandaloneUrlComponent,
        ImplGitComponent,
        ImplDataComponent,
        ImplVisComponent,
        ImplAlgorithmsComponent,
        PythonPackageComponent,
        EulaComponent,
        ContactComponent,
        PrivacyPolicyComponent,
        FaqComponent
    ]
})
export class DocComponent implements OnInit {

    @Input() api = ""
    @Input() version = ""
    @Input() cdn = ""
    @Input() host = ""
    public idPath = [0]
    public path = []
    public page = 0
    public idMap = {}

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        if (window.location.href.indexOf('doc#') > -1) {
            setTimeout(() => {
                const el = document.getElementById(window.location.href.split('#')[1])
                // @ts-ignore
                el.scrollIntoView()
            }, 500)
        }
    }
}
