import { Directive ,Input,ElementRef,Renderer,EventEmitter,HostListener} from '@angular/core';

@Directive({
  selector: '[appMycolor]',

  outputs:["emitColor"],
})


export class MycolorDirective {
  emitColor:EventEmitter<string>;

@Input() appMycolors :string[];
@Input() lists;
i:number=0;

  constructor(private e: ElementRef, private r: Renderer) { 
 
 this.emitColor=new EventEmitter();
 
  }
 ngOnInit(){
  
    }
    @HostListener('click') changeColor(){
      if(this.i==this.appMycolors.length)
      this.i=0;
      this.r.setElementStyle(this.e.nativeElement,"color",this.appMycolors[this.i]);
      this.emitColor.emit(this.appMycolors[this.i]);
      this.i=this.i+1;

    }

}
