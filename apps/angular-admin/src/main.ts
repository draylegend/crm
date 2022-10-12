import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeRU from '@angular/common/locales/ru';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { authProvider } from '@crm/auth/domain';
import { coreProviders } from '@crm/core/domain';
import { provideEnv } from '@crm/shared/domain';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';
import { environment } from './environments/environment';

registerLocaleData(localeRU, navigator.language);

environment.production && enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    authProvider,
    coreProviders,
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideEnv(environment),
  ],
}).catch(e => console.error(e));
