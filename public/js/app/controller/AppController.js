import $ from 'jquery';

import  UserService  from '../service/UserService';

import  TrackListView  from '../view/TrackListView';
import  AlbumListView  from '../view/AlbumListView';
import  PlaylistsListView  from '../view/PlaylistsListView';

import  AlbumListModel  from '../model/AlbumListModel';
import  TrackListModel  from '../model/TrackListModel';
import  PlaylistsListModel from '../model/PlaylistsListModel';
import  TrackModel  from '../model/TrackModel';
import  AlbumModel  from '../model/AlbumModel';
import  PlaylistModel  from '../model/PlaylistsModel';

export class AppController {

    constructor(){

        this.trackList = new TrackListModel();
        this.albumList = new AlbumListModel();
        this.playlistList = new PlaylistsListModel();
        this.trackListView = new TrackListView("#appContainer");
        this.albumListView = new AlbumListView("#appContainer");
        this.playlistsListView = new PlaylistsListView("#appContainer");

        this._randomImageTime = null;

        this.init();
    }

    init(){

        this.authenticate();

        if( this.checkAuthenticate() ) {

            $("#loginButton").hide();
            this.getUserTracks();
        }
        else {

            $("#view").hide();
        }

        $(".nav-left__menu .nav-left__menu__item").click(function(){

            $(".nav-left__menu .nav-left__menu__item").removeClass("nav-left__menu__item--active");
            $(this).addClass("nav-left__menu__item--active");
        });

        $("#btnGetUserTracks").click(() => {

            this.getUserTracks();
        });

        $("#btnGetUserAlbums").click(() => {

            this.getUserAlbums();
        });

        $("#btnGetUserPlaylists").click(() => {

            this.getUserPlaylists();
        });

    }

    authenticate(){

        this.params = this.hashParams();

        if( this.params.error || !this.params.access_token ) return;

        this.userService = new UserService( this.params.access_token );
    }

    checkAuthenticate() {
        
        return this.userService ? true : false;
    }

    getUserAlbums() {

        this.userService.getUserAlbums()
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

        this.userService.getUserTracks()
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

    getUserPlaylists() {

        this.userService.getUserPlaylist()
        .then(res => {

            let items = res.items;

            items.map(item => {

                this.playlistList.addPlaylist( 
                    new PlaylistModel( 
                        item.name,
                        item.images, 
                        item.external_urls.spotify, 
                        item.owner, 
                        item.collaborative
                    ) 
                );                
            })

            this.playlistsListView.update( this.playlistList.getPlaylists() );
            this.randomImages( this.playlistList.getPlaylists() );
        })
        .catch(error => {

            console.log(error);
        });
    }

    randomImages( model ) {

        this._randomImageTime ? clearInterval(this._randomImageTime) : '';

        let randomFirstNumber =  Math.floor(Math.random() * (model.length - 0) + 0);

        $(".bg-home__blur-image").css({
            "background-image": "url('"+ model[randomFirstNumber].Image +"')"
        });

        $(".bg-home__image").attr("src", model[randomFirstNumber].Image);

        this._randomImageTime = setInterval(() => {

            let randomNumber =  Math.floor(Math.random() * (model.length - 0) + 0);

            $(".bg-home__blur-image").css({
                "background-image": "url('"+ model[randomNumber].Image +"')"
            });

            $(".bg-home__image").attr("src", model[randomNumber].Image);

        }, 10000)
    }

    hashParams(){
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
}