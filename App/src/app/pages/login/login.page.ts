import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms'
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage {

  errore: string;

  get username(){
    return this.LoginForm.get("username")
  }

  get password(){
    return this.LoginForm.get("password")
  }

  LoginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })


  constructor(private authService: AuthenticationService,
              private formBuilder : FormBuilder, 
              private request : RequestService, 
              private utilities: UtilitiesService) 
              {}



  public submit(){

    if(this.LoginForm.invalid){
      this.errore="Compila i campi adeguatamente."
      return
    }

    this.request.post({
      path:"/login",
      data:{
        username: this.LoginForm.value.username,
        password: this.LoginForm.value.password
      },

      handler:(response)=>{
        this.authService.login(response["access_token"])
        console.info("token: " +  response["access_token"]);
      },

      error:(error)=>{ 
        if (error.status != 401){
          this.utilities.alertError({})
        }
        else{
          let msg = error.error.info == -1 ? "Il tuo account non è stato ancora attivato!" : "Nome utente o password errati."
          this.errore= msg
        }
      },

      httpHeaders:this.request.createHeader()

    })

  }

}
