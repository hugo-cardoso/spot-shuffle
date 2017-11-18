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

        <h3 class=" title title--view">My Playlists</h3>

            ${ playlistsList.Playlists.map(playlist =>
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

            <div class="col-xs-12 col-md-4 col-md-offset-4">
                <div class="pagination">
                    <div class="pagination__number">
                        <span class="pagination__label">PAGE: </span>${ playlistsList.Page }
                    </div>
                    <div class="pagination__buttons">
                        <button class="pagination__btn prevPage" data-section="playlistsList" data-page="${ playlistsList.Page }">
                            <i class="fa fa-caret-left" aria-hidden="true"></i>
                        </button>
                        <button class="pagination__btn nextPage" data-section="playlistsList" data-page="${ playlistsList.Page }">
                            <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    `;
    };
}