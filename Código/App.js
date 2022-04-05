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
        this._playSong = undefined; //canción sonando actualmente
        this._visual = new Visual(0);
        this._pauseImage = loadImage('./Images/pause.png');
        this._playlist1Songs = [];
        this._playlist2Songs = [];
        this._playlist1 = []
        /*this._songs.forEach((song,index) => {
            if(index % 2 === 0){
                this._playlist1.push(new PluginArray)
            }
            
        });*/

        this._playlist2 = new Playlist(this._playlist2Songs);

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

        this._playlist1Songs.push(this._songs[0]);
        this._playlist1Songs.push(this._songs[2])
        this._playlist1Songs.push(this._songs[4])


        this._playlist2Songs.push(this._songs[1])
        this._playlist2Songs.push(this._songs[3])
        this._playlist2Songs.push(this._songs[5])

        console.log(this._playlist1);
    }

    draw() {
        this._visual.screens();
        this.showSongs();
    }

    pressed() {
        this._visual.click0(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickUploadSong(mouseX, mouseY);
        this._visual.clickOpen(mouseX, mouseY);
        this._visual.clickClose(mouseX, mouseY);
        this._visual.clickPlay(mouseX,mouseY,this._pauseImage,this._playSong);
        this.clickerSong();
    }

    showSongs() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._songs.length; i++) {
                const song = this._songs[i];
                // if(i % 15 === 0){
                song.x = 40;
                song.y = (30 * i) + 270;
                fill(255)
                textSize(15);
                text(song.name + ' (' + song.author + ') ' + (song.file.duration() / 60).toFixed(2) + 'min', song.x, song.y);
            }
        }
    }

    clickerSong() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._songs.length; i++) {
                const song = this._songs[i];
                if (song.clicker(mouseX, mouseY)) {
                    this._playSong = this._songs[i];
                    this._playSong.file.play();
                    this._playSong.playing = true;
                    this._visual.miniPlayerOpen = true;
                }
            }
        }

    }

}