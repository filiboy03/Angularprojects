import { Directive ,ElementRef, Renderer,Input} from '@angular/core';

@Directive({
  selector: '[appMyvisibilty]'
})


export class MyvisibiltyDirective {
@Input() appMyvisibilty:boolean;

  constructor(private e: ElementRef, private r: Renderer) { 
    
  }
  ngOnInit(){
   if(this.appMyvisibilty==false){
          this.r.setElementStyle(this.e.nativeElement, 'display', "none")
    }
    else this.r.setElementStyle(this.e.nativeElement, 'display',"inline");
    }

}