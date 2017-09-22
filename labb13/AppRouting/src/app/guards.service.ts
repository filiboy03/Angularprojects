
import { Injectable } from '@angular/core';
import { DataService } from "./dataservice.service";
import { ActivatedRoute } from '@angular/router';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class Guardservice implements CanActivate{
  private id:string;
  private students;

  constructor(dataservice: DataService, private router:Router){
    this.students = dataservice.getdata();
  }
 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{   
  this.id = route.params.id;
  for(let student of this.students){
      if(student['id']==this.id){
        return true;
      }    
  }
   this.router.navigate(['error']); 
  }

}