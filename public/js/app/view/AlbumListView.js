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

            ${ albumList.map(album =>
            `

                <div class="col-xs-6 col-md-4 col-lg-2">
                    <div class="track">
                        <div class="track__cover-wrap">
                            <img class="track__cover" src="${ album.Image }" alt="${ album.Name }">
                        </div>
                        <p class="track__title truncate">${ album.Name }</p>
                        <p class="track__sub-title truncate">${ album.Artists }</p>
                    </div>
                </div>

            `
            ).join('') }
        </div>
    `;
    };
}