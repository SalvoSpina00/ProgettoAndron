import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';
import { MapPage } from 'src/app/private/map/map.page'
@Component({
  selector: 'app-need',
  templateUrl: './need.page.html',
  styleUrls: ['./need.page.scss'],
})
export class NeedPage implements OnInit {


  bisogni : any;


  constructor(private request : RequestService, private utility: UtilityService, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.getNeed()
  }

  getNeed(){
    this.request.get({
      path:"approve/needs",
      handler:(response)=>{
        response= response ?? []
        this.bisogni = response
        console.log(this.bisogni)
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

  acceptNeed(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"approve/needs",
          httpParam:{ "id" : id },
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getNeed()
              },
              header:"Operazione Effettuata",
              message:"Bisogno attivato correttamente"
            
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi confermare questo bisogno?"
    })
  }

  refuseNeed(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.delete({
          path:"approve/needs",
          httpParam:{"id" : id},
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getNeed()
              },
              header:"Operazione Effettuata",
              message:"Bisogno rifiutato"
            
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
          
        })
      },
      header:"Attenzione",
      message:"Vuoi rifiutare questo bisogno?"
    })
  }
  
  async showMap(posizione){
    const popover = await this.popoverCtrl.create({
      component:MapPage,
      componentProps: {"coor":posizione}
      
    })
    popover.present()
  }


}
