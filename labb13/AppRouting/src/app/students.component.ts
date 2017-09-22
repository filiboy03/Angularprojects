import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "./dataservice.service";


@Component({
  selector: 'app-students',
  template: `
    <p>
      Students List!
    </p>
    <ul>
    <li *ngFor="let student of students"><a href="/profile/{{student.id}}">{{student.name}}</a></li>
    </ul>
      `,
  styles: []
})
export class StudentsComponent  {
  students={};
  constructor(private dataservice: DataService){
    this.students= this.dataservice.getdata();
  }

  
}
