// regiones-seleccionadas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionesSeleccionadasService {
  private regionSeleccionada: string = ''; // Inicializa con un valor por defecto

  setRegionSeleccionada(region: string) {
    this.regionSeleccionada = region;
  }

  getRegionSeleccionada() {
    return this.regionSeleccionada;
  }
}
