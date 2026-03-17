import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { environment } from './environments/environment';
import { routes } from './app/app.routes'; // I'll need to create this or export it from AppRoutingModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(NgbModule)
  ]
}).catch(err => console.error(err));
