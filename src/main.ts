import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { IMAGE_CONFIG } from '@angular/common';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

import { AppComponent } from "./app/app.component";
import { environment } from './environments/environment';
import { routes } from './app/app.routes'; // I'll need to create this or export it from AppRoutingModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

if (environment.production) {
  enableProdMode();
}

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
            950: '#0a2f6b'
        }
    }
});

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(NgbModule),
    providePrimeNG({
        theme: {
            preset: MyPreset,
            options: {
                darkModeSelector: '.theme-dark'
            }
        }
    }),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    }
  ]
}).catch(err => console.error(err));
