import { Component, OnInit } from '@angular/core';
import { DatosMetService } from '../../servicios/datos-met.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private datosServ : DatosMetService ) { }

  ngOnInit() {
  }
datos(){
	console.log("Hola");
	this.datosServ.getTemp("Villanueva de la Cañada").subscribe(x=>console.log(x.query.results.channel));//.item.forecast[0].high));
}
}
