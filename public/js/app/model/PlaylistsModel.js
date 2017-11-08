export default class PlaylistModel {

    constructor( name, images, link, owner, colaborative  ) {

        this._name = name;
        this._images = images;
        this._link = link;
        this._owner = owner;
        this._colaborative = colaborative;
    }

    getName() {

        return this._name;
    }

    getImage() {

        return this._images[0].url;
    }

    getLink() {

        return this._link;
    }

    getOwner() {

        return this._colaborative;
    }
}