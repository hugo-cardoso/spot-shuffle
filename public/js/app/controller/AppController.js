import $ from 'jquery';

import  UserService  from '../service/UserService';

import  TrackListView  from '../view/TrackListView';
import  AlbumListView  from '../view/AlbumListView';
import  PlaylistsListView  from '../view/PlaylistsListView';
import  RandomImageView from '../view/RandomImageView';

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
        this.randomImagesView = new RandomImageView(".bg-home");

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

            $(".nav-left__menu .nav-left__menu__item")
                .removeClass("nav-left__menu__item--active");

            $(this)
                .addClass("nav-left__menu__item--active");
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

        $(document).on('click', '.track__btn-play', (_elem) => {

            let elem = $(_elem.target).parents(".track");
            let audio = $(elem).find("audio").get(0);
            let button = $(elem).find(".track__btn-play");

            if ( audio.paused ) {

                let audios = document.querySelectorAll("audio");

                audios.forEach(audio => {

                    let button = $(audio).parents(".track").find(".track__btn-play");

                    button.find("i")
                        .removeClass("fa-pause")
                        .addClass("fa-play");

                    audio.pause();
                });

                button.find("i")
                    .removeClass("fa-play")
                    .addClass("fa-pause");

                audio.play();
            }
            else {

                button.find("i")
                    .removeClass("fa-pause")
                    .addClass("fa-play");

                audio.pause(); 
            }

            
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

        this.albumList.clearList();

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

            this.albumListView.update( this.albumList.Albums );
            this.randomImages( this.albumList.Albums );
        })
        .catch(error => {

            console.log(error);
        });
    }

    getUserTracks() {

        this.trackList.clearList();

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
                        track.album.images, 
                        track.external_urls.spotify,
                        track.preview_url
                    ) 
                );
            })

            this.trackListView.update( this.trackList.Tracks );
            this.randomImages( this.trackList.Tracks );
        })
        .catch(error => {

            console.log(error);
        });
    }

    getUserPlaylists() {

        this.playlistList.clearList();

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

            this.playlistsListView.update( this.playlistList.Playlists );
            this.randomImages( this.playlistList.Playlists );
        })
        .catch(error => {

            console.log(error);
        });
    }

    randomImages( model ) {

        this.randomImagesView.update( model );
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