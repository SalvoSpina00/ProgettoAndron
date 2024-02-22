import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  get login(){
    return this.loginForm.get("login")
  }

  get password(){
    return this.loginForm.get("password")
  }

  public errorMessages = {
    login: [
      { type: "required", message: "Questo campo è obbligatorio" },
    ],
    password: [
      { type: "required", message: "Questo campo è obbligatorio" },
    ],
  }

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(private authService: AuthenticationService,private formBuilder : FormBuilder, private request:RequestService, private utility : UtilityService) { }

  ngOnInit() {

  }

  public submit(){
    this.request.post({

      path: "login",
      data: this.loginForm.value,
      httpHeaders: this.request.createHeader(),

      handler:(token)=>{
        this.authService.login(token["access_token"])
      },

      error:(error)=>{
        if (error.status==401){
          this.utility.simplyAlert({
            header:"Attenzione", 
            message:"Username o password errati."
          })
        }else{
          this.utility.alertError({})
        }
      }
    })

  }
}
