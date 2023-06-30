import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    Page1RoutingModule,
    SharedModule,
  ]
})
export class Page1Module { }
