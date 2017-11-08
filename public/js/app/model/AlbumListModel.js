export default class AlbumListModel {

    constructor() {
        
        this._albums = [];
    }

    addAlbum( album ) {

        this._albums.push( album );
    }

    getAlbums() {

        return this._albums;
    }
}