import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzservice: Dbzservice){

  }

  // @Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(  ){
    if (this.nuevo.nombre.trim().length === 0) { return; }



    // this.OnNuevoPersonaje.emit(this.nuevo);
    this.dbzservice.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}

