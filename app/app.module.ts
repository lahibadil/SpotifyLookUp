import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router} from './app.router'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { NavBarComponent} from './components/navbar/navbar.component';
import { SpotifyService} from './services/spotify.service';
import {AboutComponent} from './components/pages/about/about.component';
import {SearchComponent} from './components/pages/search/search.component';
import {ArtistComponent} from './components/pages/artist/artist.component';


@NgModule({
  imports:      [ BrowserModule, Router, FormsModule,HttpModule ],
  declarations: [ AppComponent,NavBarComponent, AboutComponent, SearchComponent,ArtistComponent ],
  providers: 	[SpotifyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
