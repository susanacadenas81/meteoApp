import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosMetService } from '../../servicios/datos-met.service';
import { FlashMessagesService } from 'angular2-flash-messages';

//Buscar imágenes uniformes
//Subir imagenes a firebase
//Asociar imagenes con archivos 
//mirar los códigos https://developer.yahoo.com/weather/documentation.html#codes
//componente notFound

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

  	//qué vista mostrar
  	this.bool = false;
  	//Traducción del día de la semana
  	this.dia = new Array();
  	this.dia["Mon"]="Lunes ";
  	this.dia["Tue"]="Martes";
  	this.dia["Wed"]="Miércoles";
  	this.dia["Thu"]="Jueves";
  	this.dia["Fri"]="Viernes";
  	this.dia["Sat"]="Sábado";
  	this.dia["Sun"]="Domingo";
  	//Relación tiempo-imagen
  	this.tiempo = new Array();
  	this.tiempo['Showers'] = "https://pics.clipartpng.com/midle/Partly_Cloudy_with_Sun_and_Rain_Weather_Icon_PNG_Clip_Art-1502.png";
  	this.tiempo['Scattered Showers'] = "https://pics.clipartpng.com/midle/Partly_Cloudy_with_Sun_and_Rain_Weather_Icon_PNG_Clip_Art-1502.png";
  	this.tiempo['Partly Cloudy'] = "http://icon-park.com/imagefiles/simple_weather_icons_partly_cloudy.png";
  	this.tiempo['Scattered Thunderstorms'] ="https://cdn2.iconfinder.com/data/icons/weather-24/256/Storm-512.png";
  	this.tiempo['Thunderstorms'] = "https://cdn2.iconfinder.com/data/icons/weather-24/256/Storm-512.png";
  	this.tiempo['Mostly Cloudy'] = "http://www.dailyfreepsd.com/wp-content/uploads/2013/06/Cloudy-Overcast-weather-icon-vector.png";
  	this.tiempo['Cloudy'] = "http://www.dailyfreepsd.com/wp-content/uploads/2013/06/Cloudy-Overcast-weather-icon-vector.png";
  	this.tiempo['Mostly Sunny'] = "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png";
  	this.tiempo['Sunny'] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/sol.png?alt=media&token=4f3a4bc6-91bf-49cd-b87e-ead06304d28f";
  	this.tiempo['Rain'] = "https://pics.clipartpng.com/midle/Partly_Cloudy_with_Sun_and_Rain_Weather_Icon_PNG_Clip_Art-1502.png";
  }

  buscar(){
  	this.municipio = this.formMuni.value.municipio;

  	this.datosServ.getTemp(this.municipio).subscribe(
  		x=> {
           if(x.query.results != null && x.query.results.channel.item != null){
           this.res = x.query.results.channel.item.forecast;
  	 		   this.bool = true;
            console.log(this.res);
           this.lugar = x.query.results.channel.location.city;
            }
           else {
             this.flashMensaje.show('ERROR : Ciudad no encontrada',{cssClass:'alert-danger',timeout:3000});
             this.formMuni.reset();
              }
  	 	});
  }

  volver(){
    this.res = [];
  	this.bool = false;
  }

}
