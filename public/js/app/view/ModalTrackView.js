import $ from 'jquery';

export default class ModalTrackView {

    constructor( _elem ) {

        this.elem = $(_elem);
    }

    update( model ) {

        console.log(this.elem);

        this.elem.find(".modal").html( this._template( model ) );
        this._open();
    }

    _template( model ) {

        return `
        
            <div class="modal__cover-wrap">
                <div class="modal__cover-blur" style="background-image: url('${ model.Image }')"></div>
                <img class="modal__cover" src="${ model.Image }" />
            </div>
            <div class="modal__content">
                <h3 class="title">${ model.Name }</h3>
                <ul>
                    <li>Artist: ${ model.Artist }</li>
                    <li>Album: ${ model.Album }</li>
                    <li>Duration: ${ model.Duration }</li>
                    <li>ID: ${ model.Id }</li>
                </ul>
                <button class="closeModal">CLOSE</button>
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