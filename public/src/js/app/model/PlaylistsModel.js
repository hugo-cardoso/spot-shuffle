export default class PlaylistModel {

    constructor( opt ) {

        this._name = opt.name;
        this._images = opt.images;
        this._link = opt.url;
        this._owner = opt.owner;
        this._colaborative = opt.collaborative;
    }

    get Name() {

        return this._name;
    }

    get Image() {

        return this._images[0].url;
    }

    get Link() {

        return this._link;
    }

    get Owner() {

        return this._owner.id;
    }

    get Colaborative() {

        return this._colaborative;
    }
}