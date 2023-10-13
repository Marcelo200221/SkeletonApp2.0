import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { StorageService} from '../servicios/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string="";
  pass: string="";
  constructor(private alertController: AlertController,private navCtrl: NavController,private storage: StorageService) { }

  ngOnInit() {
  }

  async login(){
    if(this.nombre != "" && this.pass != ""){
      const usuario = {nombre: this.nombre, pass: this.pass}
      this.storage.setValue("Usuario", usuario);
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
