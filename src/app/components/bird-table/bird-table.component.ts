import { Component, OnInit } from '@angular/core';
import {BirdServiceService} from '../../services/bird-service.service';

declare var Materialize: any;

@Component({
  selector: 'app-bird-table',
  templateUrl: './bird-table.component.html',
  styleUrls: ['./bird-table.component.css']
})
export class BirdTableComponent implements OnInit {
  formAdd = false;
  formUpdate = false;
  tableValues: any;
  zonesData: any;
  countriesData: any;
  filterDataCountries: any;
  birdSelected = {
    'id' : '',
    'cod' : '',
    'name' : '',
    'sciName' : ''
  };
  newBird = {
    'cod' : '',
    'commonName' : '',
    'scientificName' : '',
    'codZone' : '',
    'codCountry' : ''
  };
  selectedZone: any = null;
  selectedCountry: any = null;
  filterZone: any = -1;
  filterName: any = '';

  constructor(private birdService: BirdServiceService) { }

  ngOnInit() {
    this.loadDataTable();
    this.loadZonesData();
    this.loadCountriesData();
  }



  updateInformation() {
    // update the fields,
    // is not necesary add the class='active' in the views
    Materialize.updateTextFields();
  }

  loadDataTable() {
    this.birdService.getAllBirds().subscribe(result => {
      this.tableValues = result;
    });
  }

  loadZonesData() {
    this.birdService.getAllZones().subscribe(result => {
      this.zonesData = result;
    });
  }

  loadCountriesData() {
    this.birdService.getAllCountries().subscribe(result => {
      this.countriesData = result;
      console.table(this.countriesData);
    });
  }


  selectForUpdate(bird) {
    this.formUpdate = true;
    this.formAdd = false;
    this.birdSelected.id = bird.id;
    this.birdSelected.name = bird.commonName;
    this.birdSelected.cod = bird.cod;
    this.birdSelected.sciName = bird.scientificName;
  }

  showFormAdd() {
    this.formAdd = true;
    this.formUpdate = false;
  }

  filterCountries() {
    console.log('la zona es: ' + this.selectedZone);
    if (this.countriesData) {
      this.filterDataCountries = this.countriesData.filter(x => x.codZona === Number(this.selectedZone) );
      this.selectedCountry = this.filterDataCountries[0];
    }
  }

  selectCountry() {
    console.log('el pais es: ' + this.selectedCountry);
  }

  saveBird() {
    this.newBird.codZone = this.selectedZone;
    const codigoPais = this.filterDataCountries.find(item => item.name === this.selectedCountry);
    this.newBird.codCountry = codigoPais.cod;
    console.table(this.newBird);
    this.birdService.saveBird(this.newBird).subscribe(result => {
      console.log('guardado !');
      this.loadDataTable();
      console.log(result);
    });

  }

  updateBird() {
      this.birdService.updateBird(this.birdSelected).subscribe(result => {
      console.log('actualizado');
      this.loadDataTable();
    });
  }

  deleteBird(bird: any) {
    console.log('delete method!');
    this.birdService.deleteBird(bird.id).subscribe(result => {
      console.log(result);
      this.loadDataTable();
    });
  }

  hideAddForm() {
    this.formAdd = false;
  }
  hideUpdateForm() {
    this.formUpdate = false;
  }

  filterTable() {
    console.log(this.filterName);
    this.loadDataTable();
    this.birdService.getFilterTable(this.filterName).subscribe(result => {
      this.tableValues = result;
    });
  }


}
