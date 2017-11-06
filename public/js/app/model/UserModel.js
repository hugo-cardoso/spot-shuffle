class UserModel {

    constructor( name, email, country ){

        this.name = name;
        this.email = email;
        this.country = country;
    }

    getName() {

        return this.name;
    }

    getEmail() {

        return this.email;
    }

    getCountry() {

        return this.country;
    }

}