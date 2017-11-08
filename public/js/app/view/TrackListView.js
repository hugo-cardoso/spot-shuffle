import $ from 'jquery';
 
 export default class TrackListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( trackList ) {

        this._elem.html( this._template(trackList) );
    }

    _template( trackList ) {

        return `

        <div class="row">

            ${ trackList.map(track =>
            `
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <div class="track">
                        <img src="${ track.getImage() }" alt="${ track.getArtist() }">
                        <div class="track__info">
                            <div class="track__info__wrap text-center">
                                <p class="track__info__title">${ track.getName() }</p>
                                <p class="track__info__sub-title">${ track.getArtist() }</p>
                            </div>
                        </div>
                    </div>
                </div>

            `
            ).join('') }
        </div>
    `;
    }
}