class TrackListModel {

    constructor() {
        
        this._tracks = [];
    }

    addTrack( track ) {

        this._tracks.push( track );
    }

    getTracks() {

        return this._tracks;
    }
}