import { Component } from '@angular/core';

  @Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
  })
 export class ListadoComponent  {

    herores: string[] = ['Spiderman','Iroman','Hulk','Thor', 'Capitán America'];

    heroeBorrado: string= '';
  borrarHeroe(): void{

  this.heroeBorrado = this.herores.shift() || '';


  }

}
