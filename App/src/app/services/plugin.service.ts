import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker/ngx'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UtilitiesService } from './utilities.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor(
    private geolocation: Geolocation, 
    private platform : Platform, 
    private actionSheetController: ActionSheetController, 
    private imagePicker: ImagePicker, 
    private camera: Camera, 
    private utilities: UtilitiesService) { 
      
    }

  getPlatform() : Array<String>{
    return this.platform.platforms()
  }

  mobile(){
    return !(this.platform.platforms().includes("mobileweb") || this.platform.platforms().includes("desktop"))
  }
  
  chooseIm($event=null,handler){
    if (this.mobile()){
      this.chooseImage(handler)
    }
    else{
      this.getImageBrowser($event,handler)
    }

  }

  async chooseImage(handler, nimage=1) {

    const actionSheet = await this.actionSheetController.create({
      header: "Scegli l'immagine",
      buttons: [
        {
          text: 'Carica dalla libreria',
          icon: 'images',
          handler: () => {
            this.pickImageFromAlbum(handler, nimage)
          }
        }, 
        {
          text: 'Usa la fotocamera',
          icon: 'camera',
          handler: () => {
            this.pickImageFromCamera(handler)
          }
        }, 
        {
          text: 'Esci',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present()

}

pickImageFromAlbum(handler,nimage){
  let options : ImagePickerOptions = {
    maximumImagesCount : nimage,
    outputType : OutputType.DATA_URL,
  }
  this.imagePicker.getPictures(options)
    .then(selectedImg => {
      selectedImg.forEach(handler);
    })
    .catch((error)=>{
      this.utilities.alertError({
        header:"Attenzione!",
        message:"Non è stato possibile accedere alla libreria, controlla i permessi dell'applicazione."
      })
      
    })
}

pickImageFromCamera(handler){
  let options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options)
    .then(handler)
    .catch((error)=>{
      if (error=="No Image Selected") {
        return
      } 
      this.utilities.alertError({
        header:"Attenzione!",
        message:"Non è stato possibile accedere alla libreria, controlla i permessi dell'applicazione."
      })
    })
}

getCurrentPosition(handler){
  this.geolocation.getCurrentPosition().then(
    handler,
    (error)=>{
      this.utilities.alertError({
        header:"Attenzione", 
        message:"Non è stato possibile recuperare la posizione."
      })
    }
  )
}

getImageBrowser($event,handler){
  let file = $event.target.files[0]

  let reader = new FileReader();

  reader.onload = (e: any) => {
      let fileData = e.target.result;
      fileData=fileData.split(",")[1]
      handler(fileData)
  };
  reader.readAsDataURL(file);
}

  
}
