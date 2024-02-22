import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Storage } from '@ionic/storage';
import { RequestService } from './services/request.service';
import { UtilitiesService } from './services/utilities.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  msg: string;
  data: {};
  errore: string;
  utenza: string;
  userPic: any;

  constructor(private authenticationService: AuthenticationService, private router: Router, private storage: Storage, private request : RequestService, private utilities: UtilitiesService, private menu : MenuController){
    
    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['home']);
        this.storage.get("anagraficaJson").then( anagrafica => {
          this.data=anagrafica
          this.utenza=anagrafica.utenza
          if (anagrafica.foto!=null){
            this.userPic = 'data:image/jpeg;base64,'+ anagrafica.foto
          }
          else{
            this.userPic =  this.utilities.user
          }
        })
      }
      else {
        this.router.navigate(['login']);
      }
    });


  }

  logout(){

    let handler= () =>{
      this.authenticationService.logout();
    }
    this.request.delete({
      path:"/logout",
      handler:handler,
      error: handler
    })
    
  }

}
