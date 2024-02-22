import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular'
import { RequestService } from './request.service';
const TOKEN_KEY="token";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt:Platform, private request : RequestService) {
    this.plt.ready().then(() => {
        this.storage.create()
        this.checkToken()
    })
  }

  login(token){
    this.request.token=token
    return this.storage.set(TOKEN_KEY, token).then(
      (res)=>{
        this.authenticationState.next(true);
      }
    )
  }

  logout(){
    return this.storage.remove(TOKEN_KEY).then(
      (res)=>{
        this.authenticationState.next(false);
      },
      (error)=>{
      }
    )

  }

  isAuth(){
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get(TOKEN_KEY).then(
      (res)=>{
        if (res){
          this.request.token=res
          this.request.get({
            path:"approve/services",
            handler:()=>{
              this.authenticationState.next(true);
            },
            error:()=>{
              this.authenticationState.next(false);
            }
          })
        }
        else{
          this.authenticationState.next(false);
        }
      },
    )
  }

  getToken(){
    return this.storage.get(TOKEN_KEY).then(token=>{
      return token;
    })
  }

}
