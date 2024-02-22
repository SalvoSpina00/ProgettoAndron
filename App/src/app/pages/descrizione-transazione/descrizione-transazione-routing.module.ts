import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescrizioneTransazionePage } from './descrizione-transazione.page';

const routes: Routes = [
  {
    path: '',
    component: DescrizioneTransazionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescrizioneTransazionePageRoutingModule {}
