import {Injectable} from '@angular/core';
import {Album} from "../models/album";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";



@Injectable()
export class AlbumService {
  private _url: string = 'db.json';

  constructor(private _http: Http) {
  }

  getAlbums(): Observable<Album[]> {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);


    // return [
    //   {name: 'ki', thumb_img: "assets/img/project/1.jpg", title: "girls..."},
    //   {name: 'ki', thumb_img: "assets/img/project/2.jpg", title: "Pure Childhood"},
    //   {name: 'ki', thumb_img: "assets/img/project/3.jpg", title: "Pure Childhood"},
    //   {name: 'ki', thumb_img: "assets/img/project/4.jpg", title: "Pure Childhood"},
    //   {name: 'ki', thumb_img: "assets/img/project/5.jpg", title: "Pure Childhood"},
    //   {name: 'ki', thumb_img: "assets/img/project/6.jpg", title: "Pure Childhood"},
    //   {name: 'ki', thumb_img: "assets/img/project/7.jpg", title: "Pure Childhood"},
    //   {name: 'ki', thumb_img: "assets/img/project/8.jpg", title: "Pure Childhood"},
    // ]
  }

  _errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'error');
  }


}
