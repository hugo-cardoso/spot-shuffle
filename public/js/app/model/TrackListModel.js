import ListModel from '../model/ListModel';

export default class TrackListModel extends ListModel {

    constructor( offset ) {
        
        super();
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