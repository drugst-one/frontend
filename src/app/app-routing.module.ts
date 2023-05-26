import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from "./pages/standalone/standalone/standalone.component";
import { CallLandingComponent } from "./pages/call-landing/call-landing.component";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
    { path: "home", component: PagesComponent },
    { path: "idea", component: PagesComponent },
    { path: "standalone", component: StandaloneComponent },
    { path: "playground", component: PagesComponent },
    { path: "cite", component: PagesComponent },
    { path: "call", component: PagesComponent },
    {
        path: "doc", component: PagesComponent, children: [
            { path: 'home', component: PagesComponent },
            { path: 'start', component: PagesComponent },
            { path: 'ui', component: PagesComponent },
            { path: 'customize', component: PagesComponent },
            { path: 'standalone', component: PagesComponent },
            { path: 'implementation', component: PagesComponent },
            { path: 'faq', component: PagesComponent }
        ]
    },
];

// const routes: Routes = []

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

