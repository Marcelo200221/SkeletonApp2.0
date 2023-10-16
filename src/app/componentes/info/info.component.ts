import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {

  infor: any;

  constructor() {
    this.infor = { batteryLevel: 0, isCharging: false };
   }

  async logDeviceInfo(){
    const info = await Device.getInfo();
    
  
    console.log(info);
  };
  
  async logBatteryInfo () {
    const info = await Device.getBatteryInfo();
    this.infor = info;
  
    console.log(info);
  };

  ngOnInit() {}

}
