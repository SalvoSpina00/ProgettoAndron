import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.page.html',
  styleUrls: ['./activate-user.page.scss'],
})
export class ActivateUserPage implements OnInit {

  utenti: any

  constructor(private request : RequestService, private utility: UtilityService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.request.get({
      path:"account/user",
      handler:(result)=>{
        result= result ?? []
        result.forEach(element => {
          element["foto"] = 'data:image/jpeg;base64,'+ element["foto"]
        });
        this.utenti=result 
        console.log(this.utenti)
      },
      error:(error)=>{
        this.utility.alertError({})
      }
    })
  }

  activateUser(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path: "account/user",
          httpParam: { "id" : id },
          handler:
          (result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getUser()
              },
              header:"Operazione Effettuata",
              message:"Account Utente attivato correttamente"
            
            })
          },
          error:
          (error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi attivare questo account?"
    })
  }

  refuseUser(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.delete({
          path:"account/user",
          httpParam: {"id" : id},
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getUser()
              },
              header:"Operazione Effettuata",
              message:"Account Utente attivato correttamente"
            
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi rifiutarti di attivare questo account?"
    })
  }

  
}
