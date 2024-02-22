import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { RequestService } from './request.service';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
  userType:string;

  constructor(private storage: Storage, private plt: Platform, private request: RequestService) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(
      (res)=>{
        if(res){
          this.request.token=res
          this.getAnagrafica()
        }
        else{
          this.authenticationState.next(false)
        }
      }
    )
  }

  //! Aggiungi Cambio password
  getAnagrafica(){
    this.request.get({
      
      path:"/info",

      handler: (response)=>{
        this.storage.set("anagraficaJson", response)
        this.userType = response["utenza"]
        this.storage.set("utenza", response["utenza"]).then(()=>{
          this.authenticationState.next(true);
        });
        if (response["utenza"] == "ente" && response["firstLog"]==0){
          //this.cambiaPass()
        }
      }
    })
  }

  login(tokenKey: string) {
    this.request.token=tokenKey
    return this.storage.set(TOKEN_KEY,tokenKey).then(
      ()=>{
        this.getAnagrafica()
      }
    )
  }

  logout() {
    return this.storage.remove("anagraficaJson") && this.storage.remove(TOKEN_KEY).then(
      () => {
        this.authenticationState.next(false);
      }
    );
    
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getToken(){
    return this.storage.get(TOKEN_KEY).then(token=>{
      return token;
    })
  }

  /*
  async cambiaPass(){
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: "Attenzione",
      message: "Questo è il tuo primo accesso, inserire una nuova password e la conferma della password(min 8 caratteri e almeno 1 Maiuscola)",
      inputs: [
        {
          name: 'vecchiapassword',
          type: 'password',
          placeholder: 'Vecchia password'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Nuova password'
        },
        {
          name: 'check',
          type: 'password',
          placeholder: 'Conferma password'
        }],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if (!(data.password && data.check)){
              this.apiService.simplyAlert(()=>{},"Attenzione!", "Compila tutti i campi!")
              return false
            }
            if(data.password.trim()=='' || data.check.trim()==''){
              this.apiService.simplyAlert(()=>{},"Attenzione!", "Password non valida!")
              return false
            }

            if(data.password!=data.check){
              this.apiService.simplyAlert(()=>{},"Attenzione!", "Le password non coincidono!")
              return false
            }
            this.apiService.updatePassword(data.vecchiapassword,data.password).then(retApiService => {
              retApiService.subscribe({
                next:()=>{
                  this.apiService.simplyAlert(()=>{}, "Operazione effettuata", "Il cambio password è stato effettuato correttamente")
                  alert.dismiss()
                },
                error:(errore)=>{
                  if(errore.status==401){
                    this.apiService.simplyAlert(()=>{},"Attenzione!", "La vecchia password non è corretta!")
                  }else{
                    this.apiService.simplyAlert()
                  }
                }
              })
            })
            return false
          }
        }]
    });
    await alert.present();

  }
  */
}
