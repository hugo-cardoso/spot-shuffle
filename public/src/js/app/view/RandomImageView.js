import $ from 'jquery'; 

export default class RandomImageView {

    constructor( elem ) {

        this._elem = $(elem);
        this._timer = null;
    }

    update( model ) {

        this._timer ? clearInterval(this._timer) : '';

        let firstImage = model[this.generateNumber( model )].Image;
        let coverElem = this._elem.find(".bg-home__image");
        let backgroundElem = this._elem.find(".bg-home__blur-image");

        coverElem
        .attr("src", firstImage);

        backgroundElem
        .css({ "background-image": "url('"+ firstImage +"')"});

        this._timer = setInterval(() => {

             let image =  model[this.generateNumber(model)].Image;

             coverElem
             .attr("src", image);

             backgroundElem
             .css({"background-image": "url('"+ image +"')"});

         }, 10000)
    }

    generateNumber( model ) {

        return Math.floor(Math.random() * (model.length - 0) + 0);
    }
}