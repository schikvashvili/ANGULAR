import {  Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  readonly rootURL = 'http://localhost:60043/api';
  //options: any;
  constructor(private http: Http) { }

 getEmployee() {
   
    const params = {
      'url' : 'http://api.github.com/search/users?q=tom'
    }

    let httpPostOptions =
    {
      headers:
        new Headers(
          {
            'Content-Type': 'application/json',
          }),
      withCredentials: true,
    }
    
   return this.http.post(this.rootURL + '/values', params,
   httpPostOptions);
  }
}
