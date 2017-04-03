import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {SpotifyService} from '../../../services/spotify.service';
import {Artist} from '../../../../domaine/artist';
import {Album} from '../../../../domaine/album';


@Component({
	moduleId:module.id,
	selector:"artist",
	templateUrl : 'artist.component.html',
	providers:[SpotifyService],
})

export class ArtistComponent{

	private id:string;
	artist : Artist[];
	albums : Album[];

	constructor(private spotifyService: SpotifyService,
		private route : ActivatedRoute) {
		// code...
	}

	ngOnInit(){
		this.route.params
		.map(params => params['id'])
		.subscribe((id) => {
			this.spotifyService.getArtist(id)
			.subscribe(artist => {
				this.artist = artist;
			})
		})

		this.route.params
		.map(params => params['id'])
		.subscribe((id) => {
			this.spotifyService.getArtistAlbums(id)
			.subscribe(albums => {
				this.albums = albums.items;
			})
		})
	}
}