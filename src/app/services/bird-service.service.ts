import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BirdServiceService {
  baseUrl = 'http://localhost:8080/birdszone/api/';

  constructor(private http: Http) { }

  getAllBirds() {
    const query = 'Birds/';
    const  url = this.baseUrl + query;
    return this.http.get(url).map(res => res.json());
  }

  getAllZones() {
    const query = 'Zones/';
    const  url = this.baseUrl + query;
    return this.http.get(url).map(res => res.json());
  }

  getAllCountries() {
    const query = 'Countries/';
    const  url = this.baseUrl + query;
    return this.http.get(url).map(res => res.json());
  }

  saveBird(bird: any) {
    const query = 'Bird/';
    const url = this.baseUrl + query;
    const headers = new Headers({'Content-Type' : 'application/json'});
    const options = new RequestOptions({headers : headers});
    return this.http.post(url, JSON.stringify(bird), options).map(res => res);
  }

  updateBird(data: any) {
    const query = 'Update/Bird/' + data.id;
    const url = this.baseUrl + query;
    const headers = new Headers({'Content-Type' : 'application/json'});
    const options = new RequestOptions({headers : headers});
    const updateReq = {
      'cod' : data.cod,
      'commonName' : data.name,
      'scientificName' : data.sciName
    }
    return this.http.post(url, JSON.stringify(updateReq), options).map(res => res.json());
  }

  deleteBird(id: any) {
    const query = 'Delete/Bird/' + id;
    const url = this.baseUrl + query;
    return this.http.post(url, null).map(res => res);
  }
  getFilterTable(filterName: any) {
    const query = 'BirdFilter';
    const url = this.baseUrl + query ;
    const headers = new Headers({'Content-Type' : 'application/json'});
    const options = new RequestOptions({headers : headers});
    const filterReq = {
      'filtro' : filterName
    }
    return this.http.post(url, JSON.stringify(filterReq), options).map(res => res.json());
  }

}
