import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../domain/heroe';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data: any;
  heroes: Array<Heroe> = [];
  filter: string;
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.heroesService.getAllCharacters().subscribe(result => {
      this.data = result.data;
      this.getAllCharacters();
      console.log(this.data);
    });
  }

  getAllCharacters() {
    for (let index = 0; index < this.data.results.length; ++index) {
      console.log(this.data.results[index]);
      const hero = new Heroe(this.data.results[index].name, this.data.results[index].description,
        this.data.results[index].urls[0].url, this.data.results[index].thumbnail.path);
      this.heroes.push(hero);
    }
  }

  filterList(newValue) {
    console.log(newValue);
    this.filter = newValue.target.value;
    if (this.filter) {
      this.heroes = this.heroes.filter(x => x._name.includes(this.filter) );
    }else {
      this.getAllData();
    }
  }



}
