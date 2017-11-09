export default class TrackListModel {

    constructor() {
        
        this._tracks = [];
    }

    addTrack( track ) {

        this._tracks.push( track );
    }

    get Tracks() {

        return this._tracks;
    }

    clearList() {

        this._tracks = [];
    }
}