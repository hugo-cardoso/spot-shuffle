 export default class AlbumModel {

    constructor( name, artists, images, link ) {

        this._name = name;
        this._artists = artists;
        this._images = images;
        this._link = link;
    }

    getName() {

        return this._name;
    }

    getArtists() {

        return this._artists[0].name;
    }

    getImage() {

        return this._images[0].url;
    }

    getLink() {
        
        return this._link;
    }
}