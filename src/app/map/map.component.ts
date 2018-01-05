import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',

}) 

export class MapComponent {
  lat:any;
  lng:any;
  
  constructor(){if(navigator){
    navigator.geolocation.getCurrentPosition(pos => {
      this.lng = +pos.coords.longitude;
      this.lat = +pos.coords.latitude;
    })
  }}

    public trash1: any={lat: 51.228788, lng:4.415600}; //27 Duboisstraat 
    public trash2: any={lat: 51.227772, lng:4.416908}; //Van Aerdtstraat 40
    public trash3: any={lat: 51.227088, lng:4.417005}; //39 Cassiersstraat
    public trash4: any={lat: 51.228876, lng:4.418815}; //23 Fuggerstraat
    public trash5: any={lat: 51.229796, lng:4.421133}; //2 Viaduct-Dam
    public trash6: any={lat: 51.228046, lng:4.414690}; //2 De Waghemakerestraat
    public trash7: any={lat: 51.2260333, lng:4.416853}; //99 van de Wervestraat
    public trash8: any={lat: 51.227461, lng:4.422158}; //290 Dambruggestraat
    public trash9: any={lat: 51.228946, lng:4.419846}; //1 Korte Dijkstraat
    public trash10: any={lat: 51.228167, lng:4.420739}; //27 Marnixstraat antwerp
    
}