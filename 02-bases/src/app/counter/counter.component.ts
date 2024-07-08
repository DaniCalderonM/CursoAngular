import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increasedBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increasedBy(-1)">-1</button>



  `
})
export class CounterComponent {
  public counter: number = 10;

  increasedBy(value: number): void {
    this.counter += value;
  }

  //Hice exactamente lo que el programo despues al dar la solucion :')
  resetCounter(): void {
    this.counter = 10;
  }

  // decreaseBy():void {
  //   this.counter -=1;
  // }
}
