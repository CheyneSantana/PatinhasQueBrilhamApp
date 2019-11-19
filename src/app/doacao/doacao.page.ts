import { DadosOnlinePage } from './dados-online/dados-online.page';
import { DadosBancariosPage } from './dados-bancarios/dados-bancarios.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async dadosBancarios() {
    const modal = await this.modalController.create({
      component: DadosBancariosPage
    });
    return await modal.present();
  }

  async dadosOnline() {
    const modal = await this.modalController.create({
      component: DadosOnlinePage
    });
    return await modal.present();
  }

}
