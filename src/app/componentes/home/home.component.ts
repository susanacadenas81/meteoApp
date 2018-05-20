import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosMetService } from '../../servicios/datos-met.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('formMuni') formMuni: NgForm;
  municipio:any
  res : Array<Object>
  bool :Boolean
  dia : Array<any>
  tiempo : Array<any>
  lugar : String

  constructor(private datosServ : DatosMetService,private flashMensaje:FlashMessagesService) { 
  	this.res = [];
  }


  ngOnInit() {

  	//Te da el formulario si es false o el resultado si es true
  	this.bool = false;

  	//Traducción del día de la semana
  	this.dia = this.datosServ.getDiaSemana();

  	//Relación tiempo-imagen
  	this.tiempo = this.datosServ.getImagenes();
  }

  buscar() {
    //coge el valor de lo introducido en el form
  	this.municipio = this.formMuni.value.municipio;

    //llama al servicio para obtener los datos y trabajar de forma asíncrona
  	this.datosServ.getTemp(this.municipio).subscribe(
  		x=> {
           if(x.query.results != null && x.query.results.channel.item != null){
           this.res = x.query.results.channel.item.forecast;
  	 		   this.bool = true;
           this.lugar = x.query.results.channel.location.city;
            }
           else {
             this.flashMensaje.show('ERROR : Ciudad no encontrada',{cssClass:'alert-danger',timeout:3000});
             this.formMuni.reset();
              }
  	 	});
  }

  //para volver a la vista de formulario
  volver(){

    this.res = [];
  	this.bool = false;

  }

}
