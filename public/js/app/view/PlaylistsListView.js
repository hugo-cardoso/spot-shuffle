import $ from 'jquery';

export default class PlaylistsListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( playlistsList ) {

        this._elem.html( this._template( playlistsList ) );
    }

    _template( playlistsList ) {

        return `
        
        <div class="row">

            ${ playlistsList.map(playlist =>
            `

                <div class="col-xs-6 col-md-4 col-lg-2">
                    <div class="track">
                        <img src="${ playlist.Image }" alt="${ playlist.Name }">
                        <div class="track__info">
                            <div class="track__info__wrap text-center">
                                <p class="track__info__title">${ playlist.Name }</p>
                                <p class="track__info__sub-title">${ playlist.Owner }</p>
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