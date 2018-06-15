import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  equipments = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getEquipments();
  }

  getEquipments(){
    this.appService.equipments().subscribe(resp => {
      let data = resp.json();
      console.log(data);
      this.equipments = data;
    })
  }
}
