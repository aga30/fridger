import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'page1',
        pathMatch:"full"
      },
      {
        path: 'page1',
        children: [
          {
            path: ''
            , loadChildren: () => import('src/app/modules/page1/page1.module').then(m => m.Page1Module)
          },

        ]
      },
      {
        path: 'page2',
        children: [
          {
            path: ''
            , loadChildren: () => import('src/app/modules/page2/page2.module').then(m => m.Page2Module)
          },

        ]
      },
      {
        path: 'page3',
        children: [
          {
            path: ''
            , loadChildren: () => import('src/app/modules/page3/page3.module').then(m => m.Page3Module)
          },

        ]
      },
      {
        path: 'page4',
        children: [
          {
            path: ''
            , loadChildren: () => import('src/app/modules/page3/page3.module').then(m => m.Page3Module)
          },

        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
