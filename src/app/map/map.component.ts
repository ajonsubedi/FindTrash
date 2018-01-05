import { Component } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import * as geolib from "geolib";

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',

}) 

export class MapComponent {
  lat:any;
  lng:any;
  
  dir = undefined;
  
  constructor(){if(navigator){
    navigator.geolocation.getCurrentPosition(pos => {
      this.lng = +pos.coords.longitude;
      this.lat = +pos.coords.latitude;
    })
   }
  }
  //GET DISTANCE  
   trash1Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.415600, latitude:51.228788}) + "m";
   trash2Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.416908, latitude:51.227772}) + "m";
   trash3Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.417005, latitude:51.227088}) + "m";
   trash4Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.418815, latitude:51.228876}) + "m";
   trash5Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.421133, latitude:51.229796}) + "m";
   trash6Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.414690, latitude:51.228046}) + "m";
   trash7Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.416853, latitude:51.2260333}) + "m";
   trash8Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.422158, latitude:51.227461}) + "m";
   trash9Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.419846, latitude:51.228946}) + "m";
   trash10Distance:any= geolib.getDistance({longitude:4.416172, latitude:51.230130},{longitude: 4.420739, latitude:51.228167}) + "m";
   
  


   //import1:any= this.trash.document.getElementById("distanceTrash1");
   

  public getDirectionTrash1(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172 },
      destination:{lat: 51.228788, lng:4.415600}
    }
  }

  public getDirectionTrash2(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172  },
      destination:{lat: 51.227772, lng:4.416908}
    }
  }

  public getDirectionTrash3(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172  },
      destination:{lat: 51.227088, lng:4.417005}
    }
  }

  public getDirectionTrash4(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172  },
      destination:{lat: 51.228876, lng:4.418815}
    }
  }

  public getDirectionTrash5(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172  },
      destination:{lat: 51.229796, lng:4.421133}
    }
  }

  public getDirectionTrash6(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172 },
      destination:{lat: 51.228046, lng:4.414690}
    }
  }

  public getDirectionTrash7(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172 },
      destination:{lat: 51.2260333, lng:4.416853}
    }
  }

  public getDirectionTrash8(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172  },
      destination:{lat: 51.227461, lng:4.422158}
    }
  }

  public getDirectionTrash9(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172 },
      destination:{lat: 51.228946, lng:4.419846}
    }
  }

  public getDirectionTrash10(){
    
    this.dir = {
      
      origin: {lat:51.230130, lng:4.416172 },
      destination:{lat: 51.228167, lng:4.420739}
    }
  }

  
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