class AppController {

    constructor(){

        this.userService = new UserService();
        this.trackList = new TrackListModel();
        this.albumList = new AlbumListModel();
        this.trackListView = new TrackListView("#viewContent");
        this.albumListView = new AlbumListView("#viewContent");

        this._randomImageTime = null;

        this.params = null;
        this.access_token = null;
        this.refresh_token = null;
        this.error = null;
        this.userInfo = null;

        this.init();
    }

    init(){

        this.authenticate();

        if( this.checkAuthenticate() ) {

            $("view").show();
            this.getUserTracks();
        }
        else {

            $("#view").hide();
        }

        $("#menuApp li a").click(function(){

            $("#menuApp li").removeClass("is-active");
            $(this).parent("li").addClass("is-active");
        });
    }

    authenticate(){

        this.params = this.hashParams();
        this.access_token = this.params.access_token;
        this.refresh_token = this.params.refresh_token;
        this.error = this.params.error;

        if( this.error || !this.access_token ) {
            return;
        }

        $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
              'Authorization': 'Bearer ' + this.access_token
            },
            success: response => {
              
              $("#headerHero .subtitle").html("Olá, " + response.id);
            }
        });
    }

    checkAuthenticate() {
        
        return this.access_token ? true : false;
    }

    organizeBig() {

        this.trackListView.organizeBig( this.trackList.getTracks() );
    }

    organizeSmall() {
        
        this.trackListView.organizeSmall( this.trackList.getTracks() );
    }

    getUserAlbums() {

        this.userService.getUserAlbums(this.access_token)
        .then(res => {

            let items = res.items;

            items.map(item => {
                
                let album = item.album;

                this.albumList.addAlbum(
                    new AlbumModel(
                        album.name,
                        album.artists,
                        album.images,
                        album.link
                    )
                );
            });

            this.albumListView.update( this.albumList.getAlbums() );
            this.randomImages( this.albumList.getAlbums() );
        })
        .catch(error => {

            console.log(error);
        });
    }

    getUserTracks() {

        this.userService.getUserTracks(this.access_token)
        .then(res => {

            let items = res.items;

            items.map(item => {

                let track = item.track;

                this.trackList.addTrack( 
                    new TrackModel( 
                        track.name,
                        track.artists[0].name, 
                        track.album.name, 
                        track.duration_ms, 
                        track.album.images[0], 
                        track.external_urls.spotify 
                    ) 
                );
            })

            this.trackListView.update( this.trackList.getTracks() );
            this.randomImages( this.trackList.getTracks() );
        })
        .catch(error => {

            console.log(error);
        });
    }

    randomImages( model ) {

        this._randomImageTime ? clearInterval(this._randomImageTime) : '';

        this._randomImageTime = setInterval(() => {

            let randomNumber =  Math.floor(Math.random() * (model.length - 0) + 0);

            let imageUrl = model[randomNumber].getImage();

            $("#headerHero .blur-bg").css({
                "background-image": "url('"+ imageUrl +"')"
            });

        }, 6000)
    }

    hashParams(){
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        console.log(hashParams)
        return hashParams;
    }
}