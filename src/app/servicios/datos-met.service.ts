import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DatosMetService {

	private diaSemana : Array<String> 

	private imagenes : Array<String>

 	constructor(private http:Http) { 

 	}

	getTemp(ciu){

		return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${ciu}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`).map(r=>r.json());

	}

	getDiaSemana(){

		this.diaSemana = new Array();
		this.diaSemana["Mon"]="Lunes ";
	  	this.diaSemana["Tue"]="Martes";
	  	this.diaSemana["Wed"]="Miércoles";
	  	this.diaSemana["Thu"]="Jueves";
	  	this.diaSemana["Fri"]="Viernes";
	  	this.diaSemana["Sat"]="Sábado";
	  	this.diaSemana["Sun"]="Domingo";
		return this.diaSemana;

	}

	getImagenes(){

		this.imagenes = new Array();
		this.imagenes["0"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tornado.png?alt=media&token=8efa88d6-00f5-4c3b-bf22-de5f238d64dc";
		this.imagenes["1"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["2"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tornado.png?alt=media&token=8efa88d6-00f5-4c3b-bf22-de5f238d64dc";
		this.imagenes["3"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["4"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["5"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaNieve.png?alt=media&token=a86e4e04-0d13-4721-9b11-fc49bf928b15";
		this.imagenes["6"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaNieve.png?alt=media&token=a86e4e04-0d13-4721-9b11-fc49bf928b15";
		this.imagenes["7"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaNieve.png?alt=media&token=a86e4e04-0d13-4721-9b11-fc49bf928b15";
		this.imagenes["8"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaFuerte.png?alt=media&token=a8d7ff4a-0704-4560-b154-de9b604d83c6";
		this.imagenes["9"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaFuerte.png?alt=media&token=a8d7ff4a-0704-4560-b154-de9b604d83c6";
		this.imagenes["10"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaFuerte.png?alt=media&token=a8d7ff4a-0704-4560-b154-de9b604d83c6";
		this.imagenes["11"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaFuerte.png?alt=media&token=a8d7ff4a-0704-4560-b154-de9b604d83c6";
		this.imagenes["12"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaFuerte.png?alt=media&token=a8d7ff4a-0704-4560-b154-de9b604d83c6";
		this.imagenes["13"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["14"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["15"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["16"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["17"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/granizo.png?alt=media&token=1f8b766e-94c9-472c-8c43-0d33f14016a2";
		this.imagenes["18"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaNieve.png?alt=media&token=a86e4e04-0d13-4721-9b11-fc49bf928b15";
		this.imagenes["19"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/polvo.png?alt=media&token=5b4db1c7-5b3d-4de8-86c9-5b7a5f01b1c7";
		this.imagenes["20"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/niebla.png?alt=media&token=d4843f07-3bfa-420a-bdbc-a8037b6aa5df";
		this.imagenes["21"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/niebla.png?alt=media&token=d4843f07-3bfa-420a-bdbc-a8037b6aa5df";
		this.imagenes["22"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/niebla.png?alt=media&token=d4843f07-3bfa-420a-bdbc-a8037b6aa5df";
		this.imagenes["23"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/viento.png?alt=media&token=86e00edd-d1c2-446e-bbb1-72df04048896";
		this.imagenes["24"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/viento.png?alt=media&token=86e00edd-d1c2-446e-bbb1-72df04048896";
		this.imagenes["25"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/frio.png?alt=media&token=688de5d7-c7e8-4639-b0ad-135f4f8d1a9c";
		this.imagenes["26"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nublado.png?alt=media&token=7bc4e3a3-b78c-48e5-98c2-c68e12be7044";
		this.imagenes["27"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nublado.png?alt=media&token=7bc4e3a3-b78c-48e5-98c2-c68e12be7044";
		this.imagenes["28"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nublado.png?alt=media&token=7bc4e3a3-b78c-48e5-98c2-c68e12be7044";
		this.imagenes["29"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nublado.png?alt=media&token=7bc4e3a3-b78c-48e5-98c2-c68e12be7044";
		this.imagenes["30"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nublado.png?alt=media&token=7bc4e3a3-b78c-48e5-98c2-c68e12be7044";
		this.imagenes["31"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/sol.png?alt=media&token=4f3a4bc6-91bf-49cd-b87e-ead06304d28f";
		this.imagenes["32"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/sol.png?alt=media&token=4f3a4bc6-91bf-49cd-b87e-ead06304d28f";
		this.imagenes["33"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/claros.png?alt=media&token=f60a8c4d-6267-4c1c-887b-f850df08c23d";
		this.imagenes["34"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/claros.png?alt=media&token=f60a8c4d-6267-4c1c-887b-f850df08c23d";
		this.imagenes["35"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaNieve.png?alt=media&token=a86e4e04-0d13-4721-9b11-fc49bf928b15";
		this.imagenes["36"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/calor.png?alt=media&token=d74ea06a-da1d-4e6d-8ab3-1d688b8aabf4";
		this.imagenes["37"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["38"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["39"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["40"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/lluviaFuerte.png?alt=media&token=a8d7ff4a-0704-4560-b154-de9b604d83c6";
		this.imagenes["41"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["42"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["43"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["44"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nublado.png?alt=media&token=7bc4e3a3-b78c-48e5-98c2-c68e12be7044";
		this.imagenes["45"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["46"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/nieve.jpg?alt=media&token=64f0c381-c069-4746-b902-984a4761fdc9";
		this.imagenes["47"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/tormenta.png?alt=media&token=9514e905-967f-4bc5-8af2-a46b8199d2f6";
		this.imagenes["3200"] = "https://firebasestorage.googleapis.com/v0/b/meteoapp-a396f.appspot.com/o/notaviable.png?alt=media&token=ac0d57ce-aedb-491b-8799-d0d0006ee681";


		return this.imagenes;

	}

}
