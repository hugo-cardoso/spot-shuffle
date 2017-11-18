import $ from 'jquery';

import  AppService from '../service/AppService';
import  UserService  from '../service/UserService';

import  TrackListView  from '../view/TrackListView';
import  AlbumListView  from '../view/AlbumListView';
import  PlaylistsListView  from '../view/PlaylistsListView';
import  RandomImageView from '../view/RandomImageView';
import  SearchView from '../view/SearchView';
import  SearchResultView from '../view/SearchResultView';
import  ModalTrackView from '../view/ModalTrackView';
import  ModalAlbumView from '../view/ModalAlbumView';


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
        this.searchView = new SearchView("#appContainer");
        this.modalTrackView = new ModalTrackView(".modal-wrap");
        this.modalAlbumView = new ModalAlbumView(".modal-wrap");

        this.init();
    }

    init(){

        this.authenticate();

        if( this.checkAuthenticate() ) {

            $("#loginButton").hide();
            $("body").removeClass("offline");
            this.getUserTracks();
        }

        $(".nav-left__menu .nav-left__menu__item").click(_elem => {

            let elem = $(_elem.target);

            $(".nav-left__menu__item--active").removeClass("nav-left__menu__item--active");

            elem.addClass("nav-left__menu__item--active");

            this.scrollTop();
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

        $("#createSearchView").click(() => {

            this.openSearchView();
        });

        $(document).on('submit', '#formSearch', (_elem) => {

            let searchText = $(".search__input").val();

            this.search( searchText );

            $(".search__input").blur();

            _elem.preventDefault();
        });

        $(document).on('click', '.openTrack', (_elem) => {

            let trackId = $(_elem.target).data("id");

            this.getTrack( trackId );
        });

        $(document).on('click', '.openAlbum', (_elem) => {

            let albumId = $(_elem.target).data("id");

            this.getAlbum( albumId );
        });

        $(document).on('click', '.closeModal', (_elem) => {

            this.modalTrackView.close();
        });

        $(document).on('click', '.nextPage', (_elem) => {

            const elem    = $(_elem.target),
                  section = elem.data("section"),
                  page    = Number(elem.data("page")) + 1,
                  offset  = page == 1 ? 0 : (page - 1) * 12;

                  console.log(offset);

            const sections = {
                "trackList": () => {
                    this.trackList.Page = page;
                    this.getUserTracks( 12, offset);
                },
                "albumList": () => {
                    this.albumList.Page = page;
                    this.getUserAlbums( 12, offset );
                },
                "playlistsList": () => {
                    this.playlistList.Page = page;
                    this.getUserPlaylists( 12, offset );
                }
            }

            sections[ section ]();
        });

        $(document).on('click', '.prevPage', (_elem) => {

            const elem    = $(_elem.target),
                  section = elem.data("section"),
                  page    = elem.data("page") === 1 ? 1 : elem.data("page") - 1,
                  offset  = page == 1 ? 0 : (page - 1) * 12;

            const sections = {
                "trackList": () => {
                    this.trackList.Page = page;
                    this.getUserTracks( 12, offset );
                },
                "albumList": () => {
                    this.albumList.Page = page;
                    this.getUserAlbums( 12, offset );
                },
                "playlistsList": () => {
                    this.playlistList.Page = page;
                    this.getUserPlaylists( 12, offset );
                }
            }

            sections[ section ]();
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
        this.appService = new AppService( this.params.access_token );
    }

    checkAuthenticate() {
        
        return this.userService ? true : false;
    }

    getTrack( id ) {

        this.appService.getTrack( id )
        .then(res => {

            let track = new TrackModel({
                "name": res.name,
                "artists": res.artists[0].name, 
                "albumName": res.album.name, 
                "duration": res.duration_ms, 
                "images": res.album.images, 
                "url": res.external_urls.spotify,
                "preview": res.preview_url,
                "id": res.id,
                "popularity": res.popularity
            });
            

            this.modalTrackView.update( track );
        })
        .catch(error => {
            
            this.throwError(error);
        })
    }

    getAlbum( id ) {

        this.appService.getAlbum( id )
        .then(album => {

            let model = new AlbumModel({
                "name": album.name,
                "artists": album.artists,
                "images": album.images,
                "url": album.external_urls.spotify,
                "id": album.id,
                "tracks": album.tracks.items.map(track => {
                    return new TrackModel({
                        "name": track.name,
                        "artists": track.artists[0].name, 
                        "albumName": album.name, 
                        "duration": track.duration_ms, 
                        "images": album.images, 
                        "url": track.external_urls.spotify,
                        "preview": track.preview_url,
                        "id": track.id,
                        "popularity": track.popularity
                    });

                        
                })
            })

            this.modalAlbumView.update( model );
        })
        .catch(error => {

            this.throwError(error);
        })
    }

    getUserAlbums( _limit, _offset ) {

        let limit = _limit || 12;
        let offset = _offset || 0;

        this.albumList.clearList();

        this.userService.getUserAlbums( limit, offset )
        .then(res => {

            let items = res.items;

            items.map(item => {
                
                let album = item.album;
                let tracks = album.tracks.items;

                this.albumList.addAlbum(
                    new AlbumModel({
                        "name": album.name,
                        "artists": album.artists,
                        "images": album.images,
                        "url": album.link,
                        "id": album.id,
                        "tracks": tracks.map(track => {
                            return  new TrackModel({
                                        "name": track.name,
                                        "artists": track.artists[0].name, 
                                        "albumName": album.name, 
                                        "duration": track.duration_ms, 
                                        "images": album.images, 
                                        "url": track.external_urls.spotify,
                                        "preview": track.preview_url,
                                        "id": track.id,
                                        "popularity": track.popularity
                                    })
                        })
                    })
                );
            });

            this.albumListView.update( this.albumList );
            this.randomImages( this.albumList.Albums );
            this.scrollTop();
        })
        .catch(error => {

            this.throwError(error);
        });
    }

    getUserTracks( _limit, _offset ) {

        let limit = _limit || 12;
        let offset = _offset || 0;

        console.log(_offset);

        this.trackList.clearList();

        this.userService.getUserTracks( limit, offset )
        .then(res => {

            let items = res.items;

            this.trackList.Offset = res.offset;

            console.log(this.trackList.Offset)

            items.map(item => {

                let track = item.track;

                this.trackList.addTrack( 
                    new TrackModel({
                        "name": track.name,
                        "artists": track.artists[0].name, 
                        "albumName": track.album.name, 
                        "duration": track.duration_ms, 
                        "images": track.album.images, 
                        "url": track.external_urls.spotify,
                        "preview": track.preview_url,
                        "id": track.id,
                        "popularity": track.popularity
                    }) 
                );
            })

            this.trackListView.update( this.trackList );
            this.randomImages( this.trackList.Tracks );
            this.scrollTop();
        })
        .catch(error => {

            this.throwError(error);
        });
    }

    getUserPlaylists( _limit, _offset ) {

        let limit = _limit || 12;
        let offset = _offset || 0;

        this.playlistList.clearList();

        this.userService.getUserPlaylist( limit, offset )
        .then(res => {

            let items = res.items;

            items.map(item => {

                this.playlistList.addPlaylist( 
                    new PlaylistModel({
                        "name": item.name,
                        "images": item.images, 
                        "url": item.external_urls.spotify, 
                        "owner": item.owner, 
                        "collaborative": item.collaborative
                    }) 
                );                
            })

            this.playlistsListView.update( this.playlistList );
            this.randomImages( this.playlistList.Playlists );
            this.scrollTop();
        })
        .catch(error => {

            this.throwError(error);
        });
    }

    search( _searchText ) {

        let searchText = _searchText;
        
        if( !searchText ) return;

        this.trackList.clearList();

        this.appService.getSearch( searchText )
        .then(res => {

            let items = res.tracks.items;

            items.map(track => {

                this.trackList.addTrack( 
                    new TrackModel({
                        "name": track.name,
                        "artists": track.artists[0].name, 
                        "albumName": track.album.name, 
                        "duration": track.duration_ms, 
                        "images": track.album.images, 
                        "url": track.external_urls.spotify,
                        "preview": track.preview_url,
                        "id": track.id,
                        "popularity": track.popularity
                    })
                );
            })

            let searchResultView = new SearchResultView("#searchContent");
            searchResultView.update( this.trackList.Tracks )
            this.randomImages( this.trackList.Tracks );
        })
        .catch(error => {

            this.throwError(error);
        });
    }

    openSearchView() {

        this.searchView.create();
    }

    randomImages( model ) {

        this.randomImagesView.update( model );
    }

    deslog() {

        let url = window.location.origin;
        window.location.href = url;
    }

    scrollTop() {

        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    throwError(error) {

        if( error === "Unauthorized" ) this.deslog();

        console.log(error);
    }

    hashParams(){
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
}