import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './components/pages/about/about.component';
import {SearchComponent} from './components/pages/search/search.component';
import {ArtistComponent} from './components/pages/artist/artist.component';

const router:Routes = [
	{path : '', component: SearchComponent},
	{path : 'about', component: AboutComponent},
	{path : 'artist/:id', component	: ArtistComponent}

]

export const Router : ModuleWithProviders = RouterModule.forRoot(router); 