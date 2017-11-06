class AlbumListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( albumList ) {

        console.log( albumList );
        this._elem.html( this._template( albumList ) );
    }

    _template( albumList ) {

        return `
        <div class="columns is-multiline">

            ${ albumList.map(album =>
            `
                <div class="column is-12-mobile is-3-desktop">
                    <div class="card" style="height: 100%;">
                        <div class="card-image">
                            <figure class="image is-square">
                                <img src="${ album.getImage() }" alt="${ album.getName() }">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">${ album.getName() }</p>
                                    <p class="subtitle is-6">${ album.getArtists() }</p>
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