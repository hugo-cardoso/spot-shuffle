import $ from 'jquery';

export default class SearchView {

    constructor( elem ) {

        this._elem = $(elem);  
    }

    create() {

        this._elem.html( this._template() );
    }

    _template() {

        return `

            <div class="row">

                <h3 class=" title title--view">Search</h3>

                <div class="search">

                    <form class="search__form" id="formSearch">
                        <input class="search__input" value="" type="text"/>
                        <button class="search__btn" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>

                </div>

                <div id="searchContent"></div>

            </div>
        
        `
    }
}