export default class TrackModel {

    constructor(name, artist, album, duration, cover_url, link_url) {

        this._name = name;
        this._artist = artist;
        this._album = album;
        this._duration = duration;
        this._cover_url = cover_url;
        this._link_url = link_url;
    }

    getName() {
        
        return this._name;
    }

    getArtist() {

        return this._artist;
    }

    getAlbum() {

        return this._album;
    }

    getDuration() {

        return this._duration;
    }

    getImage() {

        return this._cover_url.url;
    }

    getLink() {

        return this._link_url;
    }
}