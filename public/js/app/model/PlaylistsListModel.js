export default class PlaylistsListModel {

    constructor() {
        
        this._playlists = [];
    }

    addPlaylist( playlist ) {

        this._playlists.push( playlist );
    }

    get Playlists() {

        return this._playlists;
    }

    clearList() {

        this._playlists = [];
    }
}