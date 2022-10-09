import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAuth } from '@crm/auth/domain';
import { provideApi } from '@crm/core/domain';
import { provideEnv } from '@crm/shared/domain';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';
import { environment } from './environments/environment';

environment.production && enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideApi(),
    provideAuth(),
    provideRouter(routes),
    provideEnv(environment),
  ],
}).catch(e => console.error(e));
