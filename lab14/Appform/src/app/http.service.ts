import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'

@Injectable()
export class HttpService {
 
  constructor(public http: Http) {

   }

 getmydata(){
   return this.http.get('http://jsonplaceholder.typicode.com/users/1');
            }

}
