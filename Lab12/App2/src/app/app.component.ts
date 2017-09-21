import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-child [items]="items" ></app-child>`,
  
})

export class AppComponent {

  public val=true;
  public items:string[]=["bob","Rob","Fili","Mera"];
 
  
}

