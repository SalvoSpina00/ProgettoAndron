import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-infofeedback',
  templateUrl: './infofeedback.page.html',
  styleUrls: ['./infofeedback.page.scss'],
})
export class InfofeedbackPage implements OnInit {

  nome:string
  id:string;
  tipo:string;
  Feedback:any = [];
  media:number;
  page:number;
  psize:number;

  constructor(private route: ActivatedRoute, private request: RequestService, private utilities: UtilitiesService) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.tipo = this.route.snapshot.paramMap.get("tipo");
    this.nome = this.route.snapshot.paramMap.get("nome");
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.page=0;
    this.psize=5;
    this.getFeedback()

  }

  loadmore(event) {
    this.page++
    this.getFeedback(()=>{
      event.target.complete();
    })
  }

  getFeedback(add=()=>{}) {
    this.request.get({
      path: "/feedback",
      httpParam:{
        _psize:this.psize,
        _page:this.page,
        tipo:this.tipo,
        id:this.id
      },
      handler :(results)=>{
        this.media=results["_media"];
        for (const t of results["_msg"]) {
          this.Feedback.push(t);
        };
        add()
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
  }

}
