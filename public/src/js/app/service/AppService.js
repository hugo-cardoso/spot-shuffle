import HttpService from '../service/HttpService';
import $ from 'jquery';

export default class AppService {

    constructor( access_token ) {

        this.httpService = new HttpService( access_token );
    }

    getSearch( textSearch ) {

        let text = encodeURIComponent( textSearch );

        return this.httpService.getData('https://api.spotify.com/v1/search?q=' + text + '&type=track');
    }

    getTrack( id ) {

        return this.httpService.getData('https://api.spotify.com/v1/tracks/' + id);
    }

    getAlbum( id ) {

        return this.httpService.getData('https://api.spotify.com/v1/albums/' + id);
    }

    getTrackAlbum( id ) {

        return this.httpService.getData('https://api.spotify.com/v1/albums/' + id + '/tracks');
    }
}