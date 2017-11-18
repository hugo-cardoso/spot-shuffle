export default class TrackModel {

    constructor( opt ) {

        this._name = opt.name || null;
        this._artist = opt.artists || null;
        this._album = opt.albumName || null;
        this._duration = opt.duration || null;
        this._cover_url = opt.images || null;
        this._link_url = opt.url || null;
        this._preview_url = opt.preview || null;
        this._id = opt.id || null;
        this._popularity = opt.popularity || null;
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