import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descrizione-prodotto',
  templateUrl: './descrizione-prodotto.page.html',
  styleUrls: ['./descrizione-prodotto.page.scss'],
})
export class DescrizioneProdottoPage {

  data: string;
  
  constructor(private route: ActivatedRoute) { 
    this.data = JSON.parse(this.route.snapshot.paramMap.get("product"));
  }

}
