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
import { CodeComponent } from './components/code/code.component';

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
        CodeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TabMenuModule,
        PanelModule,
        BrowserAnimationsModule,
        DividerModule,
        CardModule,
        ButtonModule,
        HighlightJsModule
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
