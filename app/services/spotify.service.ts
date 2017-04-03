import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{

	private searchStr:string;

	constructor(private http : Http) {
		console.log("calling spotifyService......")
	}

	searchSong(str:string, type:string="artist"){
			return this.http.get("https://api.spotify.com/v1/search?q="+str+"&type="+type+"&limit=20")
			.map(res=>res.json());

	}

	 getArtist(id:string){
      ;
        return this.http.get('https://api.spotify.com/v1/artists/'+id)
            .map(res => res.json());
    }

     getArtistAlbums(artistId:string){
      ;
        return this.http.get('https://api.spotify.com/v1/artists/'+artistId+"/albums")
            .map(res => res.json());
    }

}