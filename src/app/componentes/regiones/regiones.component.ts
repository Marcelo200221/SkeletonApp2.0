import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatosRegionalesService } from 'src/app/servicios/datos-regionales.service';
import { RegionesSeleccionadasService } from 'src/app/servicios/regiones-seleccionadas.service'; 
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss'],
})
export class RegionesComponent  implements OnInit {

  regiones: any[] = [];

  regionSeleccionada: string="";

  @Output() regionSeleccionadaChanged = new EventEmitter<string>();

  constructor(private storage: StorageService,private regionesSeleccionadasService: RegionesSeleccionadasService ,private datosRegionalesService: DatosRegionalesService) { }

  seleccionarRegion(event: any) {
    const regionSeleccionada = this.regionSeleccionada;
    const regionGuardar = {region: regionSeleccionada};
    this.storage.pushValue('Usuario', regionGuardar);
    console.log(regionSeleccionada);
    
  }

  ngOnInit() {
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.datosRegionalesService.obtenerDatosRegionales().subscribe(
      (data) => {
        this.regiones = data.data;
        console.log(this.regiones);
        
      },
      (error) =>{
        console.error('Error al obtener las regiones: ', error);
        
      }
    );
  }


}
