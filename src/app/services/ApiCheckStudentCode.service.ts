
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { } from '@angular/http';

@Injectable()
export class ApiCheckStudentCodeComponentService {
  urlFetchProfile = "http://sevkn.ru.ac.th/StdAddress/getProfile.jsp?stdcode=";
  urlFetchAddress = "http://sevkn.ru.ac.th/StdAddress/getAddress.jsp?stdcode=";
  //public us = sessionStorage.getItem("stdcode");

  constructor(private http: HttpClient) {
    //this.getJSON().subscribe(res => { });
  }
  /*setJSON(username:string){
    return this.http.get('http://sevkn.ru.ac.th/authru/reparrregisuser.jsp?usr=' +username)
                .pipe(map((response: any)=> response ),
                      catchError(err => {

                        return (err)}));
  }*/

 /* getJSON(): Observable<any> {
    return this.http.get(this.urlFetchProfile)
      .pipe(map((res: any) => res),
        catchError(err => { return (err) }));
  }*/

  getCheckStd(std: string): Observable<any> {
    return this.http.get(this.urlFetchProfile + std)
      .pipe(map((res: any) => res),
        catchError(err => { return (err) }));
  }

  getJsonAddress(std: string): Observable<any> {
    return this.http.get(this.urlFetchAddress + std)
      .pipe(map((res: any) => res),
        catchError(err => { return (err) }));
  }

 

  testpost() {
    // Simple POST request with a JSON body and response type <any>
    //this.http.post<any>('http://sevkn.ru.ac.th/StdAddress/getProfile.jsp?stdcode=6106014225', { title: '' }).subscribe(data => {
    // this.postId = data.id;
    //})
  }
}
