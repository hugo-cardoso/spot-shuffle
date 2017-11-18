import HttpService from '../service/HttpService';

export default class UserService {

    constructor( access_token ) {

        this.httpService = new HttpService( access_token );
    }

    getUserTracks( limit, offset ) {

        return this.httpService.getData('https://api.spotify.com/v1/me/tracks?limit=' + limit + '&offset=' + offset);
    }

    getUserAlbums( limit, offset ) {
        
        return this.httpService.getData('https://api.spotify.com/v1/me/albums?limit=' + limit + '&offset=' + offset);
    }

    getUserInfo() {

        return this.httpService.getData('https://api.spotify.com/v1/me');
    }

    getUserPlaylist( limit, offset ) {

        return this.httpService.getData('https://api.spotify.com/v1/me/playlists?limit=' + limit + '&offset=' + offset);
    }    
}