import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { Dbzservice } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

 

  nuevo: Personaje = {
    nombre: 'Maestro Roschi',
    poder: 125822,
  }



  constructor( ){
        
  }


}
