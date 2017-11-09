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
                        <div class="track__cover-wrap">
                            <img class="track__cover" src="${ playlist.Image }" alt="${ playlist.Name }">
                        </div>
                        <p class="track__title truncate">${ playlist.Name }</p>
                        <p class="track__sub-title truncate">${ playlist.Owner }</p>
                    </div>
                </div>

            `
            ).join('') }
        </div>
    `;
    };
}