import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY= 'BlMgguG8fAiN7PLnUQok4unJbFJzLRM5';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';


  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory (tag: string){
    //Lo pasamos a minuscula
    tag = tag.toLowerCase();
    //Con esto borramos el tag repetido
    if (this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag != tag )
    }
    //Con esto llevamos el tag al inicio
    this._tagsHistory.unshift( tag );
    //Con esto configuramos que solo existan 10 tags
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();

  }


  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void{
    if ( !localStorage.getItem('history') ) return;

    this._tagsHistory= JSON.parse(localStorage.getItem('history')!);

    if( this._tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0]);

  }

  searchTag( tag:string ):void {
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`, { params })
      .subscribe( resp => {

        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });

      })
    //Esta es una forma en base a JS de conectarse a la api y debe ser asincrona,
    // pero utilizaremos la que tiene Angular
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=BlMgguG8fAiN7PLnUQok4unJbFJzLRM5&q=valorant&limit=10')
    // .then(response => response.json() )
    // .then( data => console.log(data) );

  }

}
