import $ from 'jquery';

export default class UserService {

    constructor( access_token ) {

        this._access_token = access_token; 
    }

    getUserTracks( limitValue ) {

        let limit = limitValue ? '/?limit=' + limitValue : '';
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me/tracks' + limit,
                headers: {
                  'Authorization': 'Bearer ' + this._access_token
                }
            })
            .done(res => {
                console.log(res);
                resolve(res);
            })
            .fail(() => {
                console.log("erro")
                reject("Não foi possível obter as tracks.")
            });
        })
    }

    getUserAlbums() {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me/albums',
                headers: {
                  'Authorization': 'Bearer ' + this._access_token
                }
            })
            .done(res => {
                console.log(res);
                resolve(res);
            })
            .fail(() => {

                reject("Não foi possível obter os albums.")
            });
        })
    }

    getUserInfo() {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + this._access_token
                }
            })
            .done(res => {
                console.log(res);
                resolve(res);
            })
            .fail(() => {

                reject("Não foi possível obter os albums.")
            });
        })
    }

    getUserPlaylist() {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me/playlists',
                headers: {
                  'Authorization': 'Bearer ' + this._access_token
                }
            })
            .done(res => {
                console.log(res);
                resolve(res);
            })
            .fail(() => {

                reject("Não foi possível obter os albums.")
            });
        })
    }
    
}