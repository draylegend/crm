import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppFacade } from './app.facade';

@NgModule({
  providers: [AppFacade],
  exports: [CommonModule],
})
export class SharedDomain {}
