import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  selectedPath = "";
  currentState: boolean;

  gestioneAccount = [
    {
      title: "Attiva account Utente",
      url: "/private/activate-user",
      icon: ""
    },
    {
      title: "Attiva account Impresa",
      url: "/private/activate-impresa",
      icon: ""
    },
    {
      title: "Crea account Ets",
      url: "/private/add-ente",
      icon: ""
    },
    {
      title: "Crea account Impresa",
      url: "/private/add-impresa",
      icon: ""
    },
  ]

  gestioneConflitti = [
    {
      title: "Segnalazioni Servizi",
      url: "/private/service-management",
      icon: ""
    }
    ,
    {
      title: "Segnalazioni Ordini",
      url: "/private/order-management",
      icon: ""
    }
  ]

  approva = [
    {
      title: "Servizi",
      url: "/private/service",
      icon: ""
    }
    ,
    {
      title: "Prodotti",
      url: "/private/product",
      icon: ""
    }
    ,
    {
      title: "Bisogni",
      url: "/private/need",
      icon: ""
    }
    ,
    {
      title: "Abbonamenti",
      url: "/private/subscription",
      icon: ""
    }
  ]


  constructor(
    private authService : AuthenticationService,
    private platform : Platform,
    private router : Router,

  ) {

    this.initializeApp();

    this.router.events.subscribe({
      next:(event:RouterEvent)=>{
        this.selectedPath = event.url ?? this.selectedPath
      }
    })
  }


  initializeApp(){
    this.platform.ready().then(()=>{
      this.authService.authenticationState.subscribe( state => {
        this.currentState=state;
        if (state){
          this.router.navigate(["private","home"])
        }
        else{
          this.router.navigate(["login"])
        }
      })
    })
  }


  logout(){
    this.authService.logout()
  }

}
