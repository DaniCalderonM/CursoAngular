import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-pages',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

//Inyectar el servicio
  constructor (private countriesService: CountriesService) {}

  searchByCapital( term: string):void {

    this.isLoading = true;
    //Siempre hay que poner el .subscribe(), porque o si no, no realiza la
    // peticion
    this.countriesService.searchCapital( term ).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      });

  }


}
