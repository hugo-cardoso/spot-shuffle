import $ from 'jquery';

export default class HttpService {

    constructor( access_token ) {

        this._access_token = access_token;
    }

    getData( url ) {

        return new Promise((resolve, reject) => {

            $.ajax({
                url: url,
                headers: {
                  'Authorization': 'Bearer ' + this._access_token
                }
            })
            .done(res => {
                
                resolve(res);
            })
            .fail(error => {

                reject(error.statusText)
            });
        })
    }

}