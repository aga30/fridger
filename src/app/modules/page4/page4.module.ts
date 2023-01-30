import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page4RoutingModule } from './page4-routing.module';
import { ForthPageComponent } from './components/forth-page/forth-page.component';


@NgModule({
  declarations: [
    ForthPageComponent
  ],
  imports: [
    CommonModule,
    Page4RoutingModule
  ]
})
export class Page4Module { }
