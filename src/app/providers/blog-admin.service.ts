import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Component} from '@angular/core';

@Injectable()
export class BlogAdminService {
  data;
  options;
  constructor(public http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers});
  }

  //get all users
  getAllusers(){
    return new Promise(resolve => {
      this.http.get('https://blogsterlnew.herokuapp.com/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }
}
