import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AppComponent} from "./app.component";
import {StandaloneComponent} from "./pages/standalone/standalone/standalone.component";
import {PagesComponent} from "./pages/pages.component";

const routes: Routes = [
    {path: "home", component: PagesComponent},
    {path: "idea", component: PagesComponent},
    {path: "standalone", component: StandaloneComponent},
    {path: "playground", component: PagesComponent},
    {path: "doc", component: PagesComponent},
];

// const routes: Routes = []

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

