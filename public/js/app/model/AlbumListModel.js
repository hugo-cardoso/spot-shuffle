export default class AlbumListModel {

    constructor() {
        
        this._albums = [];
    }

    addAlbum( album ) {

        this._albums.push( album );
    }

    get Albums() {

        return this._albums;
    }

    clearList() {

        this._albums = [];
    }
}