export default class TrackModel {

    constructor(name, artist, album, duration, cover_url = null, link_url = null, preview_url = null, id, popularity = null) {

        this._name = name;
        this._artist = artist;
        this._album = album;
        this._duration = duration;
        this._cover_url = cover_url;
        this._link_url = link_url;
        this._preview_url = preview_url;
        this._id = id;
        this._popularity = popularity;
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

        return this._msToMin( this._duration );
    }

    get Image() {
        
        return this._cover_url[0].url;
    }

    get Link() {

        return this._link_url;
    }

    get Preview() {

        return this._preview_url;
    }

    get Id() {

        return this._id;
    }

    get Popularity() {

        return this._popularity;
    }

    _msToMin( ms ) {
        let min = Math.floor(ms / 60000);
        let sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? '0' : '') + sec;
    }
}