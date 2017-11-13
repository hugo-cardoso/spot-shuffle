export default class TrackListModel {

    constructor( offset ) {
        
        this._tracks = [];
        this._page = 1;
    }

    addTrack( track ) {

        this._tracks.push( track );
    }

    get Tracks() {

        return this._tracks;
    }

    get Page() {

        return this._page;
    }

    set Page( value ) {

        this._page = value;
    }

    clearList() {

        this._tracks = [];
    }
}