import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavParams } from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  
  map: any;
  
  constructor(private navParams: NavParams) { 
    setTimeout( ()=>{this.loadMap(this.navParams.data.coor)},100)
  }

  ngOnInit() {

  }

  
  loadMap(posizione) {
    posizione=JSON.parse(posizione)
    let latLng = new google.maps.LatLng(posizione.latitude, posizione.longitude);
    
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(this.map);
  }

  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter()
    });
    
    let content = "<h2 style='color:black'>Bisogno segnalato qui!</h2>";
    
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
    infoWindow.open(this.map,marker);
  }
    
}
