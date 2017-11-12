 export default class AlbumModel {

    constructor( name, artists, images, link, id, tracks ) {

        this._name = name;
        this._artists = artists;
        this._images = images;
        this._link = link;
        this._id = id;
        this._tracks = tracks;
    }

    get Name() {

        return this._name;
    }

    get Artists() {

        return this._artists[0].name;
    }

    get Image() {

        return this._images[0].url;
    }

    get Link() {
        
        return this._link;
    }

    get Id() {

        return this._id;
    }

    get Tracks() {

        return this._tracks;
    }
}