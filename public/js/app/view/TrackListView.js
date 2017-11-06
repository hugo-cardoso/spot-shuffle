class TrackListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( trackList ) {

        this._elem.html( this._template(trackList) );
    }

    _template( trackList ) {

        return `
        <div class="columns is-multiline">

            ${ trackList.map(track =>
            `
                <div class="column is-12-mobile is-3-desktop">
                    <div class="card" style="height: 100%;">
                        <div class="card-image">
                            <figure class="image is-square">
                                <img src="${ track.getCoverUrl().url }" alt="${ track.getArtist() }">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">${ track.getName() }</p>
                                    <p class="subtitle is-6">${ track.getArtist() }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            `
            ).join('') }
        </div>
    `;
    };
}