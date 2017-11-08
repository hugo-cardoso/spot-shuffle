export default class PlaylistModel {

    constructor( name, images, link, owner, colaborative  ) {

        this._name = name;
        this._images = images;
        this._link = link;
        this._owner = owner;
        this._colaborative = colaborative;
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