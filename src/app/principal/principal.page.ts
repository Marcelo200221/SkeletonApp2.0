import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'
import { RegionesSeleccionadasService } from '../servicios/regiones-seleccionadas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  nombre: string="";
  nombre_usuario: string="";
  apellido: string="";
  campoSeleccionado: string="";
  cargo: string="";
  termino: string="";
  inicio: string="";
  empresa: string="";
  isVisible: boolean=true;
  trabajaSi: string="";
  selectedTab: string="";

  venceSi: string="";

  regionSelect: string="";

  regionSeleccionada: string = '';

  constructor(private regionesSeleccionadasService: RegionesSeleccionadasService ,private storage: Storage,private route: ActivatedRoute, private alertController: AlertController) { 
    this.route.queryParams.subscribe(params => {
      this.nombre_usuario = params['username']
    })

    this.regionSeleccionada = this.regionesSeleccionadasService.getRegionSeleccionada();
  }
  segmentChanged(event: any) {
    // Detecta cuándo cambia el segmento y actualiza el valor de activeSegment
    this.selectedTab = event.detail.value;
  }

  onRegionSeleccionadaChange(region: string){
    this.regionSelect = region;
    console.log(this.regionSelect);
    
  }

  ngOnInit() {
    this.storage.create();
    this.isVisible = false;
    console.log(this.regionSeleccionada);
    
  }
  ionViewDidEnter() {
    this.isVisible = false;
  }

  limpiar(){
    this.nombre = "";
    this.apellido = "";
    this.campoSeleccionado="0";
    
  }

  async mostrar(){
    this.onRegionSeleccionadaChange(this.regionSeleccionada);
    
    if(this.campoSeleccionado == "1"){
      this.campoSeleccionado = "Basico";
    }else if(this.campoSeleccionado == "2"){
      this.campoSeleccionado = "Media";
    }else if(this.campoSeleccionado == "3"){
      this.campoSeleccionado = "Superior";
    }
    if(this.nombre== "" && this.apellido == "" && (this.campoSeleccionado=="0" || this.campoSeleccionado == "")){
      const alert = await this.alertController.create({
        header: "Error",
        message: "Alguno de los datos están vacíos o no seleccionados",
        buttons: ["Ok"]
      })
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: "Datos estudiante",
        message: "Nombre: " + this.nombre + ' ' + this.apellido
                  + " Educación: " + this.campoSeleccionado,
        buttons: ["Ok"]
      })
      await alert.present();
    }
    
  }

  async terminar(){
    if(this.empresa != '' && this.trabajaSi != '' && this.cargo != ''){
      const empleado = {empresa: this.empresa, trabajaActualmente: this.trabajaSi, cargo: this.cargo}

      this.storage.set("Experiencia laboral", empleado);
      
    }
    if(this.trabajaSi == "1"){
      const alert = await this.alertController.create({
        header: "Experiencia Laboral",
        message: "Trabaja en: " + this.empresa + " como: " + this.cargo,
        buttons: ["OK"]
      })
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: "Experiencia Laboral",
        message: "Trabajó en: " + this.empresa + " como: " + this.cargo,
        buttons: ["OK"]
      })
      await alert.present();
    }
  }

  exEmpleado(){
    console.log(this.inicio);
    
    if(this.trabajaSi == '2'){
      this.isVisible = true;
    }else{
      this.isVisible = false;
    }
  }

}
