import { Directive,ElementRef, Renderer,TemplateRef  } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer) { 
  
    this.r.setElementStyle(e.nativeElement,'text-transform','uppercase'); 
  }


}
