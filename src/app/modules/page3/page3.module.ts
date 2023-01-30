import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    ThirdPageComponent
  ],
  imports: [
    CommonModule,
    Page3RoutingModule,
    GoogleMapsModule
  ]
})
export class Page3Module { }
