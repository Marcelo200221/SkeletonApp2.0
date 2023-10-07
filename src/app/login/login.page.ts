import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string="";
  pass: string="";
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create()
  }

  login(){
    const usuario = {nombre: this.nombre, pass: this.pass}
    this.storage.set('Usuario', usuario)
    .then(()=> {
      console.log('Usuario registrado exitosamente');
    })
    .catch(error => {
      console.error('Error al registrar usuario', error);
      
    })
    
  }

}
