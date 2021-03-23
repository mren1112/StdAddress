
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import {  } from '@angular/http';

@Injectable()
export class ApiThaiTambonsComponentService {
  urlFetch = "https://raw.githubusercontent.com/ignitry/thai-tambons/master/dist/thailand.json?fbclid=IwAR0Q3frLRl1p_1IRPnQ1W7bw5qQC88ad92CyK0hjlusOhKMSvFWXO1Gw0lM";
  //public us = sessionStorage.getItem("stdcode");
  private _jsonURL = 'assets/dbTemplate.json';

  constructor(private http: HttpClient) {
    this.getJSONs().subscribe(res => {

     // console.log('api '+ JSON.stringify(res) );
     // sessionStorage.setItem("stdcode", response.STD_CODE);
    });
  }
  /*setJSON(username:string){
    return this.http.get('http://sevkn.ru.ac.th/authru/reparrregisuser.jsp?usr=' +username)
                .pipe(map((response: any)=> response ),
                      catchError(err => {

                        return (err)}));
  }*/

  getJSON(): Observable<any> {
    return this.http.get(this.urlFetch)
                .pipe(map((res: any)=> res ),
                      catchError(err => {return (err)}));
  }//*/

  public getJsTemplate(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  getJSONs(): Observable<any> {
    return this.http.get(this._jsonURL)
                .pipe(map((res: any)=> res ),
                      catchError(err => {return (err)}));
  }//*/

}
