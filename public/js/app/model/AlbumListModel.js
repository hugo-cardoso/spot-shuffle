import ListModel from '../model/ListModel';

export default class AlbumListModel extends ListModel {

    constructor() {
        
        super();
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