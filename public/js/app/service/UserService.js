class UserService {

    getUserTracks( access_token ) {
        
        return new Promise((resolve, reject) => {

            $.ajax({
                url: 'https://api.spotify.com/v1/me/tracks',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                }
            })
            .done(res => {
                console.log(res);
                resolve(res);
            })
            .fail(() => {

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