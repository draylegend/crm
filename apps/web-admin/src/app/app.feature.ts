import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { appointmentEditTypePolicies } from '@crm/appointment/domain';
import { CoreUi } from '@crm/core/ui';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreUi,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'appointments',
        loadChildren: () =>
          import('@crm/appointment/week/feature').then(
            m => m.AppointmentWeekFeature,
          ),
      },
      { path: '**', redirectTo: 'appointments' },
    ]),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<unknown> => ({
        cache: new InMemoryCache({
          typePolicies: {
            Query: {
              fields: {
                ...appointmentEditTypePolicies?.['Query'].fields,
              },
            },
          },
        }),
        link: httpLink.create({ uri: 'http://localhost:3333/graphql' }),
      }),
      deps: [HttpLink],
    },
  ],
})
export class AppFeature {}
