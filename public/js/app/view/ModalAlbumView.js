import $ from 'jquery';

export default class ModalAlbumView {

    constructor( _elem ) {

        this.elem = $(_elem);
    }

    update( model ) {

        console.log(model)

        this.elem.find(".modal").html( this._template( model ) );
        this._open();
    }

    _template( model ) {

        return `
        
            <div class="modal__cover-wrap">
                <div class="modal__cover-blur" style="background-image: url('${ model.Image }')"></div>
                <img class="modal__cover" src="${ model.Image }" />
                <button class="closeModal">
                    <i class="fa fa-close" aria-hidden="true"></i>
                </button>
            </div>
            <div class="modal__content">
                <h3 class="modal__title">${ model.Name }</h3>
                <h4 class="modal__sub-title">${ model.Artists }</h4>
                <ul class="modal__infos">
                    ${

                        model.Tracks.map(track => 
                            `
                            <li class="modal__info">
                                <div class="icon">
                                    <i class="fa fa-music" aria-hidden="true"></i>
                                </div>
                                <div class="info">${ track.Name }</div>
                            </li>
                            `
                        ).join('')

                    }
                </ul>
            </div>
        
        `
    }

    _open() {

        this.elem.addClass("modal-wrap--active");
    }

    close() {

        this.elem.removeClass("modal-wrap--active");
    }
}