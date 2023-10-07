import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'; // Importa Storage

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  rut: string = "";
  institucion: string = "";

  constructor(private navCtrl: NavController, private storage: Storage) {} // Inyecta Storage

  ngOnInit() {
    // Inicializa el servicio de Ionic Storage
    this.storage.create();
  }

  registrar() {
    // Crea un objeto con los datos del usuario
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      institucion: this.institucion,
    };

    // Guarda el objeto en Ionic Storage
    this.storage.set('usuario', usuario)
      .then(() => {
        console.log('Usuario registrado y almacenado en Ionic Storage');
        // Puedes redirigir a otra página o realizar otras acciones aquí
      })
      .catch(error => {
        console.error('Error al registrar y almacenar el usuario en Ionic Storage', error);
      });
  }
}