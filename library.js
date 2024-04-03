const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  },

       //prints a list of all playlists           
       printPlaylists: function() {
              console.log(`${this.playlists.p01.id}: ${this.playlists.p01.name} - ${this.playlists.p01.tracks.length} tracks`);
              console.log(`${this.playlists.p02.id}: ${this.playlists.p02.name} - ${this.playlists.p02.tracks.length} tracks`);
       },

       //prints a list of all tracks
       printTracks: function() {

              for (track in this.tracks) {
                     console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
              };
       },

       //prints a list of tracks for a given playlist
       printPlaylist: function(playlistId) {
              let playlistArg = this.playlists[playlistId];
              console.log(`${playlistId}: ${playlistArg.name} - ${playlistArg.tracks.length} tracks`);
              playlistArg.tracks.forEach(trackId => {
                     const track = this.tracks[trackId];
                     console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
              });
       },

       //adds and existing track to an existing playlist
       addTrackToPlaylist: function(trackId, playlistId) {
              //adding track 1 (this.tracks.t01.id) to playlist 2 (this.playlist.p02.tracks)
              this.playlists[playlistId].tracks.push(trackId);
       },

       //generates a unique id
       generateUid: function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       
       //adds a track to the library
       addTrack: function(name, artist, album) {
              const generateUid = function() {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                   }
              const newPlaylist = {
                     name: name,
                     artist: artist,
                     album: album
              }
       
              let uId = generateUid();
              this.tracks[uId] = newPlaylist;
              newPlaylist.id = uId;
       },

       //adds a playlist to the library
       addPlaylist: function(name) {
              const generateUid = function() {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                   }
              const newPlaylist = {
                     name: name,
                     tracks: ['t01', 't02', 't03']
              }
       
              let uId = generateUid();
              this.playlists[uId] = newPlaylist;
              newPlaylist.id = uId;
       }
     };

library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p02');
library.addTrack('Song 4', 'Artist 4', 'Album 4');
library.addPlaylist('Studying');