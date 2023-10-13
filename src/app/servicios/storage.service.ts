import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  message: string="";

  constructor(private storage: Storage) {
    this.storage.create();
   }

  async setValue(key: string, datos: any){
    this.storage.set(key, datos)
    .then(()=> {
      console.log('Usuario registrado exitosamente');
    })
    .catch(error => {
      console.error('Error al registrar usuario', error);
      
    });
  }
  async getValue(key:string){
    return await this.storage.get(key);


    
    
  }

  async pushValue(key: string,nuevoValor: any){
    let valorExistente = await this.getValue(key);
    if(valorExistente){
      if (Array.isArray(valorExistente)) {
        valorExistente.push(nuevoValor);
      } else {
        // Si no es un array, crea un nuevo array con el valor existente y el nuevo valor
        valorExistente = [valorExistente, nuevoValor];
      }
    } else {
      // Si no existe un valor, crea un nuevo array con el nuevo valor
      valorExistente = [nuevoValor];
    }

    await this.storage.set(key, valorExistente);
  }
    

    

  
  

}
