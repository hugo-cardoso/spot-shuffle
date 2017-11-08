class PlaylistsListModel {

    constructor() {
        
        this._playlists = [];
    }

    addPlaylist( playlist ) {

        this._playlists.push( playlist );
    }

    getPlaylists() {

        return this._playlists;
    }
}