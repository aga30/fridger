import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForthPageComponent } from './components/forth-page/forth-page.component';

const routes: Routes = [
  {
    path: '',
    component: ForthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page4RoutingModule { }
