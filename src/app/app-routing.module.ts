import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'doacao',
    loadChildren: () => import('./doacao/doacao.module').then(m => m.DoacaoPageModule)
  },
  {
    path: 'adocao',
    loadChildren: () => import('./adocao/adocao.module').then(m => m.AdocaoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelPageModule)
  },
  {
    path: 'dados-bancarios',
    loadChildren: () => import('./doacao/dados-bancarios/dados-bancarios.module').then(m => m.DadosBancariosPageModule)
  },
  {
    path: 'dados-online',
    loadChildren: () => import('./doacao/dados-online/dados-online.module').then(m => m.DadosOnlinePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
