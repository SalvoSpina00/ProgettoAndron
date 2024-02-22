import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private alertController: AlertController) { }
  
  public simplyAlert({operation = ()=>{}, header, message}){
    this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: operation
        }]
    }).then(alert => alert.present());
  }

  public alertError({ handler= ()=>{}, header = "Errore", message = "Si è verificato un errore nell'esecuzione dell'operazione richiesta. Riprova più tardi, se il problema dovesse persistere contatta l'amministrazione."}){
    this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: handler
        }]
    }).then(alert => alert.present());
  }

  public confirmAlert({handlerYes = ()=>{}, handlerNo=()=>{}, header, message }){
    this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: handlerNo
        },
        { text: 'Si',
          handler: handlerYes
        }
      ]
    }).then(alert => alert.present());
  }


  //#region //! Validator 
  validatorCheckPassword(control: AbstractControl) {
    if (control.parent!=null && control.value != control.parent.value.password) {
      return { different: true };
    }
    return null;
  }
  
  validatorNotEmpty(control: AbstractControl) {
    if (control.value.trim().length==0) {
      return { required: true };
    }
    return null;
  }
  
  validatorHasWhiteSpaces(control: AbstractControl) {
    if (control.value.length != control.value.replace(" ","").length) {
      return { spaces: true };
    }
    return null;
  }
  
  validatorCF(control: AbstractControl) {  
    if (! new RegExp("^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$").test(control.value.toUpperCase())) {
      return { invalidCF: true };
    }
    return null;
  }

  validatorDate(control: AbstractControl) {  
    let data = new Date(control.value).getTime();
    var ageDifMs = Date.now() - data;
    var ageDate = new Date(ageDifMs)
    if ((ageDate.getUTCFullYear() - 1970)<18) {
      return { minorenne: true };
    }
    return null;
  }
  //#endregion
  
}
