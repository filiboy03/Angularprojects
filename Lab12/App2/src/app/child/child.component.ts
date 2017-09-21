import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
   template: `
    <p #myp></p>
     <ul #lists>
     <li *ngFor="let item of items"   >{{item}}</li>
     </ul>
     <p appUpper>text to capitalize</p> <br/><p [appMyvisibilty]='val'>text to test visibility</p><br/>
    <button [appMycolors]="colors" [lists]="list" appMycolor (emitColor)="showColor(a)" >Change Color </button>
       {{myColor}}
        `,
  styles: []
})

export class ChildComponent implements OnInit {
  public val:boolean=true;
  public colors:String[]=["red","blue","green"];
  public myColor:string;
  public list:any[]=[2,3,4];
 
@Input() items:string[];
  constructor() {
   
   }
showColor(color:string){
this.myColor=color;
}
  ngOnInit() {
    
  }

}
