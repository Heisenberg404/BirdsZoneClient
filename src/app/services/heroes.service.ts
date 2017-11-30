import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

  baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  apiKey = 'ts=1&limit=100&apikey=de4319dbbf09ffb40a94a8a93c1d4897&hash=ed57f022ec7325bc4246f75d38deeece';
  constructor(private http: Http) { }

  getAllCharacters () {
    const query = 'characters';
    const  url = this.baseUrl + query + '?' + this.apiKey;
    return this.http.get(url).map(res => res.json());
  }

}
