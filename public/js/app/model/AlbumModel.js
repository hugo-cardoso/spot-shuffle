 export default class AlbumModel {

    constructor( name, artists, images, link ) {

        this._name = name;
        this._artists = artists;
        this._images = images;
        this._link = link;
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
}