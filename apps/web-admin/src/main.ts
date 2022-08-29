import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';
import { environment } from './environments/environment';

environment.production && enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule, RouterModule.forRoot(routes)),
  ],
}).catch(e => console.error(e));
