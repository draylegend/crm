import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { coreProviders } from '@crm/core/domain';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

registerLocaleData(localeRU, 'ru-RU');

environment.production && enableProdMode();

bootstrapApplication(AppComponent, {
  providers: coreProviders(environment),
}).catch(e => console.error(e));
