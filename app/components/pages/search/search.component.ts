import {Component} from '@angular/core';
import {SpotifyService} from '../../../services/spotify.service';
import {Artist} from '../../../../domaine/artist';

@Component({
	moduleId:module.id,
	selector : 'my-search',
	templateUrl :'search.component.html',
	providers:[SpotifyService]
})

export class SearchComponent {
	
	private searchStr:string;
	private artists : Artist[];
	constructor(private spotifyService:SpotifyService) {
		
	}
	searchSong(){
		this.spotifyService.searchSong(this.searchStr).subscribe(result=>{
			this.artists=result.artists.items;
		})
		
	}
}