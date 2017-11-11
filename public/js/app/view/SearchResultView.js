import $ from 'jquery';

export default class SearchResultView {

    constructor( elem ) {

        this._elem = $(elem);  
    }

    update( trackList ) {

        this._elem.html( this._template( trackList ) );
    }

    _template( trackList ) {

        console.log(trackList)

        return `

            <div class="row">

                ${ trackList.map(track =>
                `
                    <div class="col-xs-6 col-md-4 col-lg-2">
                        <div class="track">
                            <div class="track__cover-wrap">
                                <img class="track__cover" src="${ track.Image }" alt="${ track.Artist }">

                                ${ 
                                    track.Preview ? 
                                    ` 
                                    <a class="track__btn-play" data-status="paused">
                                        <i class="fa fa-play" aria-hidden="true"></i>
                                    </a>                                

                                    ` : '' 
                                }

                            </div>

                            ${ 
                                track.Preview ? ` <audio src="${ track.Preview }" controls></audio> ` : '' 
                            }

                            <p class="track__title truncate openTrack" data-id="${ track.Id }">${ track.Name }</p>
                            <p class="track__sub-title truncate">${ track.Artist }</p>

                        </div>
                    </div>

                `
                ).join('') }

            </div>
        
        `
    }
}