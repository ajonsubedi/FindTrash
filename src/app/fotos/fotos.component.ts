import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  imageUrl : string;// = "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(96).jpg"
  images: number[] = [1,2,4,5];
  private _nr : number = 1;
  constructor() { }

  ngOnInit() {
    this.SetImage();
    setInterval(this.ChangeImage , 2000);
    
  }

  ChangeImage = () =>
  {
    this._nr = this.images[_.random(0,this.images.length - 1)];
    this.SetImage()
  }

  get imageNr()
  {
      return this._nr;
  }

  set imageNr(value: number)
  {
      this._nr = value;
      this.SetImage()
  }

  SetImage ()
  {
    this.imageUrl = `./img/${this._nr}.jpg`// `https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(${this._nr}).jpg`;
  }

}
