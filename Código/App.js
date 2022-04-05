// arreglo con los datos de las canciones
const SONGS_DATA = [{
        name: "Cóseme",
        author: "Beret",
    },
    {
        name: "A escondidas",
        author: "Lucah",
    },
    {
        name: "Cuando se va el amor",
        author: "Kany García",
    },
    {
        name: "Perfect two",
    },
    {
        name: "De ellos aprendí",
        author: "David Rees",
    },
    {
        name: "Count on Me",
        author: 'Bruno Mars'
    }
]

class App {

    constructor(preloadedFiles) {

        this._songs = []; //arreglo para mostrar las canciones en general


        const input = document.querySelector('#load-song'); //para abrir el explorador

        input.addEventListener('change', () => { // para cargar y guardar las canciones con nombre y artista
            const url = URL.createObjectURL(input.files[0]);
            const sound = loadSound(url, () => {
                const name = window.prompt("Nombre de la canción") || "";
                const author = window.prompt("Autor de la canción") || "";
                this._songs.push(new Song({
                    file: sound,
                    name,
                    author
                }));
            })
        });

        preloadedFiles.forEach((file, index) => { // para cargar todo antes de que inicie el programa
            this._songs.push(new Song({
                file,
                name: SONGS_DATA[index].name,
                author: SONGS_DATA[index].author,
                x: undefined,
                y: undefined
            }))
        })

        this._allPlaylist = [];
        this._playSong = undefined; //canción sonando actualmente
        this._playlistActual = undefined;
        this._visual = new Visual(0);
        this._sliderVolume = createSlider(0, 1, 0.5, 0.01);

        this._playlist1Songs = [];
        this._playlist2Songs = [];

        this._playlist1Songs.push(this._songs[0]);
        this._playlist1Songs.push(this._songs[2]);
        this._playlist1Songs.push(this._songs[4]);

        this._playlist2Songs.push(this._songs[1]);
        this._playlist2Songs.push(this._songs[3]);
        this._playlist2Songs.push(this._songs[5]);

        this._playlist1 = new Playlist({
            songs: this._playlist1Songs,
            name: `Playlist 1`
        })
        this._playlist2 = new Playlist({
            songs: this._playlist2Songs,
            name: `Playlist2`
        });

        this._allPlaylist.push(this._playlist1);
        this._allPlaylist.push(this._playlist2);

        console.log(this._playlist1);
    }

    draw() {
        this._visual.screens();
        this.showSongs();
        this.infoMiniPlayer();
        this.showPlaylist();
        this.showSongsPlaylist();
    }

    pressed() {
        this._visual.click0(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickUploadSong(mouseX, mouseY);
        this._visual.clickOpen(mouseX, mouseY);
        this._visual.clickClose(mouseX, mouseY);
        this.clickerSong();
        this.pauseSong();
        this.clickerPlaylist();
    }

    showSongs() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._songs.length; i++) {
                const song = this._songs[i];
                // if(i % 15 === 0){
                song.x = 40;
                song.y = (30 * i) + 270;
                fill(255)
                textAlign(CORNER, CORNER);
                textSize(15);
                text(`${song.name} (${song.author}) ${(song.file.duration() / 60).toFixed(2)} min`, song.x, song.y);
            }
        }
    }

    clickerSong() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._songs.length; i++) {
                const song = this._songs[i];
                if (song.clicker(mouseX, mouseY)) {
                    if (this._playSong !== undefined) {
                        this._playSong.file.stop();
                    }
                    this._playSong = this._songs[i];
                    this._playSong.file.play();
                    this._visual.miniPlayerOpen = true;
                }
            }
        }

    }

    pauseSong() {
        if (this._visual.clickPlay(mouseX, mouseY)) {
            if (this._playSong.file.isPlaying()) {
                this._playSong.file.pause();
            } else {
                this._playSong.file.play();
            }
        }
    }

    infoMiniPlayer() {
        if (this._visual.miniPlayerOpen === true) {
            this._sliderVolume.position(1115, 645);
            if (this._playSong !== undefined && this._playSong.file.isPlaying()) {
                fill(255);
                textSize(16);
                text(`Está sonando ${this._playSong.name}`, 960, 620);
                textSize(12);
                text((this._playSong.file.duration() / 60).toFixed(2), 1250, 688);
                this._playSong.file.setVolume((this._sliderVolume.value()));
            }
        }
    }

    closeSlider() {
        if (this._visual.miniPlayerOpen === false) {
            this._sliderVolume.style(`display`, `none`);
        }
    }

    showPlaylist() {
        if (this._visual.screen === 2) {
            this._allPlaylist.forEach((playlist, i) => {
                playlist.x = (240 * i) + 760;
                playlist.y = 140;
                playlist.show();
            })
        }
    }

    clickerPlaylist() {
        if (this._visual.screen === 2) {
            this._allPlaylist.forEach(playlist => {
                if (playlist.clicker(mouseX, mouseY)) {
                    this._visual.screen = 3;
                    this._playlistActual = playlist;
                }
            });
        }
    }

    showSongsPlaylist() {
        if (this._visual.screen === 3) {
            this._playlistActual.songs.forEach((song,i) => {
                // if(i % 15 === 0){
            song.x = 40;
            song.y = (30 * i) + 270;
            fill(255)
            textAlign(CORNER, CORNER);
            textSize(15);
            text(`${song.name} (${song.author}) ${(song.file.duration() / 60).toFixed(2)} min`, song.x, song.y);
            });
            
        }
    }

}

// this._playSong = playlist[i]
//                     if (this._playSong !== undefined) {
//                         this._playSong.file.stop();
//                     }
//                     this._playSong.file.play();
//                     this._visual.miniPlayerOpen = true;