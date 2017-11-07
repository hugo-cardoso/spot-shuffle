class TrackListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( trackList ) {

        this._elem.html( this._templateSmall(trackList) );
    }

    organizeSmall( trackList ) {
        
        this._elem.html( this._templateSmall( trackList ) );
    }

    organizeBig( trackList ) {

        this._elem.html( this._templateBig( trackList ) );
    }

    _templateSmall( trackList ) {

        return `

        <div class="field has-addons">
            <p class="control">
                <a class="button" onclick="appController.organizeSmall()">
                    <span class="icon is-small">
                        <i class="fa fa-th-list"></i>
                    </span>
                </a>
            </p>
            <p class="control">
                <a class="button" onclick="appController.organizeBig()">
                    <span class="icon is-small">
                        <i class="fa fa-th-large"></i>
                    </span>
                </a>
            </p>
        </div>

        <div class="columns is-multiline">

            ${ trackList.map(track =>
            `
                <div class="column is-12-mobile is-4-tablet is-4-desktop">
                    <div class="card" style="height: 100%;">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="${ track.getImage() }" alt="${ track.getArtist() }">
                                    </figure>
                                </div>
                                <div class="media-content">
                                <a href="${ track.getLink() }" target="parent">
                                    <p class="title is-5">
                                        ${ track.getName() }
                                    </p>
                                    </a>
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
    }

    _templateBig( trackList ) {

        return `

        <div class="field has-addons">
            <p class="control">
                <a class="button" onclick="appController.organizeSmall()">
                    <span class="icon is-small">
                        <i class="fa fa-th-list"></i>
                    </span>
                </a>
            </p>
            <p class="control">
                <a class="button" onclick="appController.organizeBig()">
                    <span class="icon is-small">
                        <i class="fa fa-th-large"></i>
                    </span>
                </a>
            </p>
        </div>

        <div class="columns is-multiline">

            ${ trackList.map(track =>
            `
                <div class="column is-12-mobile is-4-tablet is-3-desktop">
                    <div class="card" style="height: 100%;">
                        <div class="card-image">
                            <figure class="image is-square">
                                <img src="${ track.getImage() }" alt="${ track.getArtist() }">
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