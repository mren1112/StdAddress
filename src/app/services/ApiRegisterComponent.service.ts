
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import {  } from '@angular/http';

@Injectable()
export class ApiRegisterComponentService {
  urlFetchAllCourse = "http://sevkn.ru.ac.th/authru/reparrregisuser.jsp";
  //public us = sessionStorage.getItem("stdcode");

  constructor(private http: HttpClient) {
    this.getJSONTest().subscribe(response => {

      //console.log(response);
     // sessionStorage.setItem("stdcode", response.STD_CODE);
    });
  }
  setJSON(username:string){
    return this.http.get('http://sevkn.ru.ac.th/authru/reparrregisuser.jsp?usr=' +username)
                .pipe(map((response: any)=> response ),
                      catchError(err => {

                        return (err)}));
  }

  getJSONTest(): Observable<any> {
    return this.http.get(this.urlFetchAllCourse)
                .pipe(map((res: any)=> res ),
                      catchError(err => {return (err)}));
  }

}
