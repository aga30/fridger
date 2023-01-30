import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { SecondPageComponent } from './components/second-page/second-page.component';


@NgModule({
  declarations: [
    SecondPageComponent
  ],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
