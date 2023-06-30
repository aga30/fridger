import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatIconModule,
  ],
  providers: [
  ],
  exports: [
    TabsComponent,
    MatIconModule,
  ]
})
export class SharedModule { }
