import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "./dataservice.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'profile-students',
  template: `
  <h3>
 Student profile!  
</h3>
    <ul>
    <li>ID {{student.id}}</li>
    <li>Name {{student.name}}</li>
    <li>StudentID {{student.stuId}}</li>
    <li>Email {{student.email}}</li>
    </ul>
      `,
  styles: []
})
export class ProfileComponent {
  id: number;
  private subscription: Subscription;
  students={};
  private student;

  constructor(private activatedRoute: ActivatedRoute,private dataservice:DataService){
    this.students = this.dataservice.getdata();

    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
  );
  
  this.student=this.students[this.id-1];
}
 
ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
