export default class TrackListModel {

    constructor( offset ) {
        
        this._tracks = [];
        this._offset = offset || 0;
    }

    addTrack( track ) {

        this._tracks.push( track );
    }

    get Tracks() {

        return this._tracks;
    }

    get Offset() {

        return this._offset;
    }

    set Offset( value ) {

        this._offset = value;
    }

    clearList() {

        this._tracks = [];
    }
}