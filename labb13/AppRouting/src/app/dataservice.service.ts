import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data={};
  constructor() {
     this.data=[{id:1,name:"Assad saad",stuId:'12345',email:'asaad@mum.edu'},{id:2,name:"Filmon Semere",stuId:'44445',email:'fasme@mum.edu'}];
   }



  getdata(){
    return this.data;
  }
}
