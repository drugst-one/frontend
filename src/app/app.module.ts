import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DocComponent} from './pages/doc/doc.component';
import {HomeComponent} from './pages/home/home.component';
import {HowtoComponent} from './pages/howto/howto.component';
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

import fontawesome from '@fortawesome/fontawesome';
import {
    faAngleRight,
    faChevronDown,
    faChevronUp,
    faCode,
    faExclamationTriangle,
    faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';
import {faClipboard, faEnvelope, faListAlt, faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {faAngular, faReact, faVuejs} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StylepanelComponent} from './components/playground/stylepanel/stylepanel.component';


@NgModule({
    declarations: [
        AppComponent,
        DocComponent,
        HomeComponent,
        HowtoComponent,
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
        StylepanelComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
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
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
    constructor() {
        // @ts-ignore
        fontawesome.library.add(faClipboard,faExclamationTriangle, faChevronDown, faChevronUp, faCode, faLongArrowAltRight, faAngleRight, faListAlt, faQuestionCircle, faEnvelope, faAngular, faVuejs, faReact)
    }
}
