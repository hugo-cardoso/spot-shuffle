export default class ListModel {

    constructor() {

        this._page = 1;
    }

    get Page() {

        return this._page;
    }

    set Page( value ) {

        this._page = value;
    }
}