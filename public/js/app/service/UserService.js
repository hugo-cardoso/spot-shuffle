import HttpService from '../service/HttpService';

export default class UserService {

    constructor( access_token ) {

        this.httpService = new HttpService( access_token );
    }

    getUserTracks( limitValue ) {

        return this.httpService.getData('https://api.spotify.com/v1/me/tracks');
    }

    getUserAlbums() {
        
        return this.httpService.getData('https://api.spotify.com/v1/me/albums');
    }

    getUserInfo() {

        return this.httpService.getData('https://api.spotify.com/v1/me');
    }

    getUserPlaylist() {

        return this.httpService.getData('https://api.spotify.com/v1/me/playlists');
    }    
}