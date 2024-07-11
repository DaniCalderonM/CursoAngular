import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLoweCase: string = 'danicsa';
  public nameUpper: string = 'DANICSA';
  public fullName: string = 'dAnICSa cAlDeRoN';

  public customDate: Date = new Date();

}
