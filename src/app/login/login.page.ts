import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string="";
  pass: string="";
  constructor(private alertController: AlertController,private navCtrl: NavController,private storage: Storage) { }

  ngOnInit() {
    this.storage.create()
  }

  async login(){
    if(this.nombre != "" && this.pass != ""){
      const usuario = {nombre: this.nombre, pass: this.pass}
      this.storage.set('Usuario', usuario)
      .then(()=> {
        console.log('Usuario registrado exitosamente');
      })
      .catch(error => {
        console.error('Error al registrar usuario', error);
        
      })
      if(this.storage){
        this.navCtrl.navigateForward('/principal', {
          queryParams:{
            username:this.nombre
          }
        })
      }
    }else{
      const alert = await this.alertController.create({
        header: "Error",
        message: "El nombre de usuario o contraseña están vacíos",
        buttons: ["OK"]
      })
      await alert.present();
    }
  }

}
