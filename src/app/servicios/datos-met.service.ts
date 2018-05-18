import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DatosMetService {

 	constructor(private http:Http) { }

	getTemp(ciu){

		return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${ciu}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`).map(r=>r.json());

	}

}
