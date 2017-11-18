import ListModel from '../model/ListModel';

export default class PlaylistsListModel extends ListModel {

    constructor() {
        
        super();
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