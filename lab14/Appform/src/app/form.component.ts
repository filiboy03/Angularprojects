import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html'
})



export class FormComponent {
  myForm: FormGroup;

   constructor(private formBuilder: FormBuilder,private httpservice:HttpService ) {
 

    this.myForm = formBuilder.group({
 
        'username': ['', [Validators.required]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
      
      'post': ['', Validators.minLength(10)]
     
      
      
    });

  }

  Ongetdata(){
    this.httpservice.getmydata().subscribe(res => this.myForm.setValue({'username': res.json().username,'email': res.json().email,'post': res.json().name }));
  }

  onSubmit() {
    console.log(this.myForm);
  }

 
}

