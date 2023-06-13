import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {DocComponent} from './pages/doc/doc.component';
import {HomeComponent} from './pages/home/home.component';
import {PlaygroundComponent} from './pages/playground/playground.component';
import {SidebarComponent} from './components/playground/sidebar/sidebar.component';
import {DatapanelComponent} from './components/playground/datapanel/datapanel.component';
import {DrugstonepanelComponent} from './components/playground/drugstonepanel/drugstonepanel.component';
import {CodepanelComponent} from './components/playground/codepanel/codepanel.component';
import {HeaderComponent} from './components/header/header.component';
import {TabMenuModule} from "primeng/tabmenu";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {FooterComponent} from './components/footer/footer.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {HighlightJsModule} from "ngx-highlight-js";
import {CodeComponent} from './components/code/code.component';
import {PanelComponent} from './components/panel/panel.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {AccordionModule} from "primeng/accordion";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {FieldsetModule} from "primeng/fieldset";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {ColorPickerModule} from "primeng/colorpicker";
import {NiyInfoComponent} from './components/other/niy-info/niy-info.component';
import {TextinputComponent} from './components/playground/sidebar/textinput/textinput.component';
import {SwitchComponent} from './components/playground/sidebar/switch/switch.component';
import {ColorpickerComponent} from './components/playground/sidebar/colorpicker/colorpicker.component';
import {DropdownComponent} from './components/playground/sidebar/dropdown/dropdown.component';
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {SliderModule} from "primeng/slider";
import {RangeComponent} from './components/playground/sidebar/range/range.component';
import {HttpClientModule} from "@angular/common/http";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TableModule} from "primeng/table";
import {TabViewModule} from 'primeng/tabview';


import fontawesome from '@fortawesome/fontawesome';
import {
    faAngleRight,
    faChevronDown,
    faChevronUp,
    faCode,
    faExclamationTriangle,
    faLongArrowAltRight,
    faCogs,
    faProjectDiagram,
    faToolbox,
    faColumns,
    faShoePrints,
    faCodeBranch,
    faPalette,
    faBullhorn,
    faMagic,
    faDatabase,
    faGlobe,
    faCapsules,
    faSun,
    faMoon,
    faHashtag,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {faClipboard, faEnvelope, faListAlt, faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faAngular, faReact, faVuejs, faRProject, faHtml5, faPython, faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StylepanelComponent} from './components/playground/stylepanel/stylepanel.component';
import {SidebarModule} from "primeng/sidebar";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {DocNavbarComponent} from './pages/doc/elements/doc-navbar/doc-navbar.component';
import {MenuModule} from "primeng/menu";
import {PanelMenuModule} from "primeng/panelmenu";
import {DocPageComponent} from './components/documentation/doc-page/doc-page.component';
import {MotivationComponent} from './pages/motivation/motivation.component';
import {StandaloneComponent} from './pages/standalone/standalone/standalone.component';
import {DocContentComponent} from './components/documentation/doc-content/doc-content.component';
import {FaqComponent} from './pages/doc/content/other/faq/faq.component';
import {OverviewComponent} from './pages/doc/content/overview/overview.component';
import {StartComponent} from './pages/doc/content/start/start.component';
import {BasicsComponent} from './pages/doc/content/start/basics/basics.component';
import {AngularComponent} from './pages/doc/content/start/angular/angular.component';
import {VuejsComponent} from './pages/doc/content/start/vuejs/vuejs.component';
import {RshinyComponent} from './pages/doc/content/start/rshiny/rshiny.component';
import {OtherComponent} from './pages/doc/content/start/other/other.component';
import {UiComponent} from './pages/doc/content/ui/ui.component';
import {UiNetworkComponent} from './pages/doc/content/ui/ui-network/ui-network.component';
import {UiPanelsComponent} from './pages/doc/content/ui/ui-panels/ui-panels.component';
import {UiFooterComponent} from './pages/doc/content/ui/ui-footer/ui-footer.component';
import {UiTasksComponent} from './pages/doc/content/ui/ui-tasks/ui-tasks.component';
import {UiAnalysisComponent} from './pages/doc/content/ui/ui-analysis/ui-analysis.component';
import {CustomizeComponent} from './pages/doc/content/customize/customize.component';
import {CustNetworkComponent} from './pages/doc/content/customize/cust-network/cust-network.component';
import {CustConfigComponent} from './pages/doc/content/customize/cust-config/cust-config.component';
import {CustVersionComponent} from './pages/doc/content/customize/cust-version/cust-version.component';
import {CustStyleComponent} from './pages/doc/content/customize/cust-style/cust-style.component';
import {CustEventsComponent} from './pages/doc/content/customize/cust-events/cust-events.component';
import {ImplementationComponent} from './pages/doc/content/implementation/implementation.component';
import {ImplDataComponent} from './pages/doc/content/implementation/impl-data/impl-data.component';
import {ImplVisComponent} from './pages/doc/content/implementation/impl-vis/impl-vis.component';
import {ImplAlgorithmsComponent} from './pages/doc/content/implementation/impl-algorithms/impl-algorithms.component';
import { DocSubsubheaderComponent } from './components/documentation/doc-subsubheader/doc-subsubheader.component';
import { DjangoComponent } from './pages/doc/content/start/django/django.component';
import {MessagesModule} from "primeng/messages";
import { PagesComponent } from './pages/pages.component';
import { StandaloneOptionsComponent } from './pages/doc/content/standalone/standalone-options/standalone-options.component';
import { StandaloneUrlComponent } from './pages/doc/content/standalone/standalone-url/standalone-url.component';
import { StandaloneDocComponent } from './pages/doc/content/standalone/standalone-doc.component';
import { SubtitleComponent } from './components/documentation/subtitle/subtitle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StandaloneButtonsComponent } from './pages/doc/content/standalone/standalone-buttons/standalone-buttons.component';
import { CustGroupsComponent } from './pages/doc/content/customize/cust-groups/cust-groups.component';
import { CustGeneralComponent } from './pages/doc/content/customize/cust-general/cust-general.component';
import { DocSubheaderComponent } from './components/documentation/doc-subheader/doc-subheader.component';
import { DocHeaderComponent } from './components/documentation/doc-header/doc-header.component';
import { ContactComponent } from './pages/doc/content/other/contact/contact.component';
import { GitLinkComponent } from './pages/doc/elements/git-link/git-link.component';
import { PythonPackageComponent } from './pages/doc/content/other/python-package/python-package.component';
import { FromScratchComponent } from './pages/doc/content/start/from-scratch/from-scratch.component';
import { PrivacyPolicyComponent } from './pages/doc/content/other/privacy-policy/privacy-policy.component';
import { ExamplesComponent } from './components/playground/examples/examples.component';
import { CallLandingComponent } from './pages/call-landing/call-landing.component';
import { ToolsBannerComponent } from './components/other/tools-banner/tools-banner.component';
import { ToolPanelComponent } from './components/other/tools-banner/tool-panel/tool-panel.component';
import { CiteComponent } from './pages/cite/cite.component';
import { ImplGitComponent } from './pages/doc/content/implementation/impl-git/impl-git.component';


@NgModule({
    declarations: [
        AppComponent,
        DocComponent,
        HomeComponent,
        PlaygroundComponent,
        SidebarComponent,
        DatapanelComponent,
        DrugstonepanelComponent,
        CodepanelComponent,
        HeaderComponent,
        FooterComponent,
        CodeComponent,
        PanelComponent,
        NiyInfoComponent,
        TextinputComponent,
        SwitchComponent,
        ColorpickerComponent,
        DropdownComponent,
        RangeComponent,
        StylepanelComponent,
        DocNavbarComponent,
        DocPageComponent,
        MotivationComponent,
        StandaloneComponent,
        DocContentComponent,
        FaqComponent,
        OverviewComponent,
        StartComponent,
        BasicsComponent,
        AngularComponent,
        VuejsComponent,
        RshinyComponent,
        OtherComponent,
        UiComponent,
        UiNetworkComponent,
        UiPanelsComponent,
        UiFooterComponent,
        UiTasksComponent,
        UiAnalysisComponent,
        CustomizeComponent,
        CustNetworkComponent,
        CustVersionComponent,
        CustStyleComponent,
        CustEventsComponent,
        CustConfigComponent,
        ImplementationComponent,
        ImplDataComponent,
        ImplVisComponent,
        ImplAlgorithmsComponent,
        DocSubsubheaderComponent,
        DjangoComponent,
        PagesComponent,
        StandaloneOptionsComponent,
        StandaloneUrlComponent,
        StandaloneDocComponent,
        SubtitleComponent,
        StandaloneButtonsComponent,
        CustGroupsComponent,
        CustGeneralComponent,
        DocSubheaderComponent,
        DocHeaderComponent,
        ContactComponent,
        GitLinkComponent,
        PythonPackageComponent,
        FromScratchComponent,
        PrivacyPolicyComponent,
        ExamplesComponent,
        CallLandingComponent,
        CiteComponent,
        ToolsBannerComponent,
        ToolPanelComponent,
        ImplGitComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TabMenuModule,
        PanelModule,
        BrowserAnimationsModule,
        DividerModule,
        CardModule,
        ButtonModule,
        HighlightJsModule,
        ScrollPanelModule,
        AccordionModule,
        InputSwitchModule,
        FormsModule,
        FieldsetModule,
        InputTextModule,
        RippleModule,
        TooltipModule,
        ColorPickerModule,
        DropdownModule,
        CheckboxModule,
        SliderModule,
        InputTextareaModule,
        TableModule,
        FontAwesomeModule,
        SidebarModule,
        BreadcrumbModule,
        MenuModule,
        PanelMenuModule,
        TabViewModule,
        MessagesModule,
        AppRoutingModule,
        NgbModule
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
    constructor() {
        // @ts-ignore
        fontawesome.library.add(faCodeBranch,
            faPalette,faMagic,faDatabase, faGlobe,faCapsules,faSun, faMoon,faHashtag,faGithub, faTrash,
            faBullhorn, faColumns, faShoePrints, faPython, faHtml5, faToolbox, faRProject, faProjectDiagram, faCogs, faClipboard, faExclamationTriangle, faChevronDown, faChevronUp, faCode, faLongArrowAltRight, faAngleRight, faListAlt, faQuestionCircle, faEnvelope, faAngular, faVuejs, faReact)
    }
}
