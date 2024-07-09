import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit{

  @Input()
  public  gif!:Gif;

  //El OnInit nos sirve para que el componente siempre este inicializado
  ngOnInit(): void {
    if ( !this.gif) throw new Error('Gif property is required.');
  }

}
