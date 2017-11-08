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

            ${ albumList.map(album =>
            `

                <div class="col-xs-6 col-md-4 col-lg-2">
                    <div class="track">
                        <img src="${ album.Image }" alt="${ album.Name }">
                        <div class="track__info">
                            <div class="track__info__wrap text-center">
                                <p class="track__info__title">${ album.Name }</p>
                                <p class="track__info__sub-title">${ album.Artists }</p>
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