import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<Counter [counter] = "counter" (counterchange)= "counterchange($event)"></Counter>
              <p> Component Counter Value : {{counter}} </p>`,
  
})

export class AppComponent {
 
  public counter=15;
  
  counterchange(value:number){
    this.counter=value;

  }

}

