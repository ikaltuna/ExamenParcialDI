import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
 // Declaramos las variables necesarias
interface Home {

  título: string;
  descripción: string;
  url: string;

}
export class HomePage {


  constructor() {}

  //inicializamos el segmento con su valor inicial

  valorInicial: Home = {

    título: "string",
    descripción: "string",
    url: "string";

  };


  //Gestionamos el cambio de segmentos

  

}
