import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BirdTableComponent } from './components/bird-table/bird-table.component';
import {BirdServiceService} from './services/bird-service.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CardsComponent } from './components/cards/cards.component';
import {HeroesService} from './services/heroes.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BirdTableComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BirdServiceService,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
