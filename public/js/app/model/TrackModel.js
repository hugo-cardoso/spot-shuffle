export default class TrackModel {

    constructor(name, artist, album, duration, cover_url, link_url) {

        this._name = name;
        this._artist = artist;
        this._album = album;
        this._duration = duration;
        this._cover_url = cover_url;
        this._link_url = link_url;
    }

    get Name() {
        
        return this._name;
    }

    get Artist() {

        return this._artist;
    }

    get Album() {

        return this._album;
    }

    get Duration() {

        return this._duration;
    }

    get Image() {

        return this._cover_url.url;
    }

    get Link() {

        return this._link_url;
    }
}