import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DatosMetService {

  datosMetUrl = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/Madrid'
  constructor(private http:Http) { }

getTemp(ciu){
	//return this.http.get(this.datosMetUrl);
/*return this.http.get('https://opendata.aemet.es/opendata/api/prediccion/especifica/montaña/pasada/area/peu1',
{headers:new Headers({'Content-Type': 'application/json','api_key': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYWRlbmFzODFAeWFob28uZXMiLCJqdGkiOiI2ZWIwZDU5Ny00OTljLTRkMmItOWM1Yy04ZTJjNmY5Yzc2NTMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTUyNjU3OTQ4MywidXNlcklkIjoiNmViMGQ1OTctNDk5Yy00ZDJiLTljNWMtOGUyYzZmOWM3NjUzIiwicm9sZSI6IiJ9.XMFepBtfYqS8znvsgGMiTCUeodDBoAmawk9xxOheOb0'})}//cierra headers
).map(r=>this.http.get(r.json().datos));//el return*/
//var nuevo = url.subscribe(r=>r.datos);
//return this.http.get(url.subscribe(r=>r.datos).toString());
return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${ciu}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`).map(r=>r.json());

}//cierra el metodo get

}//cierra la clase
