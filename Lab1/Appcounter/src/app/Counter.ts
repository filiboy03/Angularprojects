import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'Counter',
  template: `
  <button (click)="emitminus()"> - </button> {{counter}} <button (click)="emitplus()"> + </button>
    `
})

export class Counter  {

  @Input() counter: number;
  @Output() counterchange: EventEmitter<number>;
  
 
  constructor() { 
    this.counterchange = new EventEmitter();
 }

    
 emitminus() {
  this.counter--;
  this.counterchange.emit(this.counter );
 }

 emitplus() {
  this.counter++;
  this.counterchange.emit(this.counter );
}

}