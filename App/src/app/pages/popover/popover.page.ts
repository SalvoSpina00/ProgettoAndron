import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage  {
  public msg:string
  constructor(private _navParams: NavParams) {
    this.msg=this._navParams.data.msg
  }
}
