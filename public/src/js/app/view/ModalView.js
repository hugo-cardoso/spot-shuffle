import $ from 'jquery';

export default class ModalView {

    constructor(_elem) {

        this.elem = _elem;
    }

    update( model ) {

        this.elem.find(".modal").html( this._template( model ) );
        this.open();
    }

    open() {

        this.elem.addClass("modal-wrap--active");
    }

    close() {

        this.elem.removeClass("modal-wrap--active");
    }
}