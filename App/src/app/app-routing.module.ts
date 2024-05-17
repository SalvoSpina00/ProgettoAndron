import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-utente',
    loadChildren: () => import('./pages/register-utente/register-utente.module').then( m => m.RegisterUtentePageModule)
  },
  {
    path: 'register-impresa',
    loadChildren: () => import('./pages/register-impresa/register-impresa.module').then( m => m.RegisterImpresaPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'servizi',
    loadChildren: () => import('./pages/servizi/servizi.module').then( m => m.ServiziPageModule)
  },
  {
    path: 'richiedi-servizi',
    loadChildren: () => import('./pages/richiedi-servizi/richiedi-servizi.module').then( m => m.RichiediServiziPageModule)
  },
  {
    path: 'search-filter',
    loadChildren: () => import('./pages/modal/search-filter/search-filter.module').then( m => m.SearchFilterPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'descrizione-transazione',
    loadChildren: () => import('./pages/descrizione-transazione/descrizione-transazione.module').then( m => m.DescrizioneTransazionePageModule)
  },
  {
    path: 'prodotti',
    loadChildren: () => import('./pages/prodotti/prodotti.module').then( m => m.ProdottiPageModule)
  },
  {
    path: 'descrizione-prodotto',
    loadChildren: () => import('./pages/descrizione-prodotto/descrizione-prodotto.module').then( m => m.DescrizioneProdottoPageModule)
  },
  {
    path: 'nuovo-prodotto',
    loadChildren: () => import('./pages/nuovo-prodotto/nuovo-prodotto.module').then( m => m.NuovoProdottoPageModule)
  },
  {
    path: 'nuovo-servizio',
    loadChildren: () => import('./pages/nuovo-servizio/nuovo-servizio.module').then( m => m.NuovoServizioPageModule)
  },
  {
    path: 'ordini',
    loadChildren: () => import('./pages/ordini/ordini.module').then( m => m.OrdiniPageModule)
  },
  {
    path: 'richiesta',
    loadChildren: () => import('./pages/richiesta/richiesta.module').then( m => m.RichiestaPageModule)
  },
  {
    path: 'servizi-collettivita',
    loadChildren: () => import('./pages/servizi-collettivita/servizi-collettivita.module').then( m => m.ServiziCollettivitaPageModule)
  },
  {
    path: 'segnalazione',
    loadChildren: () => import('./pages/segnalazione/segnalazione.module').then( m => m.SegnalazionePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'infofeedback',
    loadChildren: () => import('./pages/infofeedback/infofeedback.module').then( m => m.InfofeedbackPageModule)
  },
  {
    path: 'richieste-mie',
    loadChildren: () => import('./pages/richieste-mie/richieste-mie.module').then( m => m.RichiesteMiePageModule)
  },
  {
    path: 'richieste-miei-servizi',
    loadChildren: () => import('./pages/richieste-miei-servizi/richieste-miei-servizi.module').then( m => m.RichiesteMieiServiziPageModule)
  },
  {
    path: 'certifica-servizi',
    loadChildren: () => import('./pages/certifica-servizi/certifica-servizi.module').then( m => m.CertificaServiziPageModule)
  },
  {
    path: 'bisogni',
    loadChildren: () => import('./pages/bisogni/bisogni.module').then( m => m.BisogniPageModule)
  },
  {
    path: 'segnala-bisogni',
    loadChildren: () => import('./pages/segnala-bisogni/segnala-bisogni.module').then( m => m.SegnalaBisogniPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'nuovo-abbonamento',
    loadChildren: () => import('./pages/nuovo-abbonamento/nuovo-abbonamento.module').then( m => m.NuovoAbbonamentoPageModule)
  },
  {
    path: 'abbonamenti',
    loadChildren: () => import('./pages/abbonamenti/abbonamenti.module').then( m => m.AbbonamentiPageModule)
  },
  {
    path: 'acquista-abbonamento',
    loadChildren: () => import('./pages/acquista-abbonamento/acquista-abbonamento.module').then( m => m.AcquistaAbbonamentoPageModule)
  },
  {
    path: 'abbonamenti-acquistati',
    loadChildren: () => import('./pages/abbonamenti-acquistati/abbonamenti-acquistati.module').then( m => m.AbbonamentiAcquistatiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
