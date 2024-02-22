import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage {

  private minmaxprice = {
    upper: 0,
    lower: 300
  };

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss(this.minmaxprice);
  }

}
