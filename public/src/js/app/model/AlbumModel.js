 export default class AlbumModel {

    constructor( opt ) {

        this._name = opt.name;
        this._artists = opt.artists;
        this._images = opt.images;
        this._link = opt.url;
        this._id = opt.id;
        this._tracks = opt.tracks || [];
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