class UserService {

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

    getUserAlbums( access_token ) {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me/albums',
                headers: {
                  'Authorization': 'Bearer ' + access_token
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

    getUserInfo( access_token ) {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + access_token
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

    getUserPlaylist( access_token ) {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me/playlists',
                headers: {
                  'Authorization': 'Bearer ' + access_token
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