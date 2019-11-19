import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosBancariosPage } from './dados-bancarios.page';

const routes: Routes = [
  {
    path: '',
    component: DadosBancariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DadosBancariosPage]
})
export class DadosBancariosPageModule {}
