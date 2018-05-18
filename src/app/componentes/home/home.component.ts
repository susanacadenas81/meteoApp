import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosMetService } from '../../servicios/datos-met.service'


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

  constructor(private datosServ : DatosMetService) { 
  	this.res = [];
  }


  ngOnInit() {

  	//qué vista mostrar
  	this.bool = false;
  	//Traducción del día de la semana
  	this.dia = new Array();
  	this.dia["Mon"]="Lunes";
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
  	this.tiempo['Sunny'] = "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png";
  	this.tiempo['Rain'] = "https://pics.clipartpng.com/midle/Partly_Cloudy_with_Sun_and_Rain_Weather_Icon_PNG_Clip_Art-1502.png";
  }

  buscar(){
  	this.municipio = this.formMuni.value.municipio;
  	this.bool = true;
  	this.datosServ.getTemp(this.municipio).subscribe(
  		x=> {this.res = x.query.results.channel.item.forecast;
  	 		this.bool = true;
  	 		console.log(this.res);

  	 	});
  }

  volver(){
  	this.bool = false;
  }

}
