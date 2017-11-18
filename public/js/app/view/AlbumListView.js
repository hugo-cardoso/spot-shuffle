import $ from 'jquery';

export default class AlbumListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( albumList ) {

        this._elem.html( this._template( albumList ) );
    }

    _template( albumList ) {

        return `
        
        <div class="row">

            <h3 class=" title title--view">My Albums</h3>

            ${ albumList.Albums.map(album =>
            `

                <div class="col-xs-6 col-md-4 col-lg-2">
                    <div class="track">
                        <div class="track__cover-wrap">
                            <img class="track__cover openAlbum" data-id="${ album.Id }" src="${ album.Image }" alt="${ album.Name }">
                        </div>
                        <p class="track__title truncate openAlbum" data-id="${ album.Id }">${ album.Name }</p>
                        <p class="track__sub-title truncate">${ album.Artists }</p>
                    </div>
                </div>

            `
            ).join('') }

            <div class="col-xs-12 col-md-4 col-md-offset-4">
                <div class="pagination">
                    <div class="pagination__number">
                        <span class="pagination__label">PAGE: </span>${ albumList.Page }
                    </div>
                    <div class="pagination__buttons">
                        <button class="pagination__btn prevPage" data-section="albumList" data-page="${ albumList.Page }">
                            <i class="fa fa-caret-left" aria-hidden="true"></i>
                        </button>
                        <button class="pagination__btn nextPage" data-section="albumList" data-page="${ albumList.Page }">
                            <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    `;
    };
}