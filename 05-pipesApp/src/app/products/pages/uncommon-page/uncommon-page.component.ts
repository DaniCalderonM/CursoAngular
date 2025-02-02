import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

// i18nSelect Pipe
public name:string = 'Danicsa';
public gender: 'male'|'female'= 'female';
public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
}

changeCLient():void {
  this.name = 'Fernando';
  this.gender = 'male';
}

// i18nPlural Pipe
public clients: string[] = ['Maria','Pedro','Juan','Policarpo','Hernando','Eduardo','Melissa','Natalia'];
public clientsMap = {
  '=0':'no tenemos ningún cliente esperando.',
  '=1':'tenemos 1 cliente esperando.',
  'other':'tenemos # clientes esperando.'
}

deleteClient():void {
  this.clients.shift();
}

// KeyValue Pipe
public person = {
  name: 'Danicsa',
  age: 26,
  address: 'Villarrica, Chile'
}

// Async Pipe
public myObservableTimer: Observable<number> = interval(2000)
.pipe(
  tap( value => console.log('tap: ', value))
);

public promiseValue: Promise<string> = new Promise( (resolve, reject) =>{
  setTimeout(() =>{
    resolve('Tenemos data en la promesa.')
    console.log('Tenemos data en la promesa');

  }, 3500);
})

}
