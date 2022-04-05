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
        this._songs = [];
        this._playSong = undefined;
        this._butomsSong = [];
        this._visual = new Visual(0);
        this._playImage = loadImage('./Images/play.png');
        this._playlist1Songs = [];
        this._playlist2Songs = [];
        this._playlist1 = []
        this._songs.forEach((song,index) => {
            if(index % 2 === 0){
                this._playlist1.push(new PluginArray)
            }
            
        });

        this._playlist2 = new Playlist(this._playlist2Songs);

        const input = document.querySelector('#load-song');

        input.addEventListener('change', () => {
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

        preloadedFiles.forEach((file, index) => {
            this._songs.push(new Song({
                file,
                name: SONGS_DATA[index].name,
                author: SONGS_DATA[index].author,
                x: 50,
                y: (30 * index)
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
        this.buttomsSongs();
        this.showSongs();
    }

    pressed() {
        this._visual.click0(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickUploadSong(mouseX, mouseY);
        this._visual.clickOpen(mouseX, mouseY);
        this._visual.clickClose(mouseX, mouseY);
        this._visual.changeImage(this._playImage);

        this.clickerSong();
        
    }

    buttomsSongs() {
        if (this._visual.screen === 1) {
            this.createButtomsSong();
            this.showButtomsSongs();
        }
    }


    showSongs() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._songs.length; i++) {
                const song = this._songs[i];
                song.show();
            }
        }
    }

    createButtomsSong() {
        for (let i = 0; i < this._songs.length; i++) {
            this._butomsSong.push(new Buttom({
                x: 45,
                y: (30 * i) + 235,
                b: 350,
                h: 20
            }))
        }
    }

    showButtomsSongs() {
        this._butomsSong.forEach((buttom) => {
            buttom.show2();
        });
    }

    clickerSong() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._butomsSong.length; i++) {
                const buttom = this._butomsSong[i];
                if (buttom.clicker2(mouseX, mouseY)) {
                    this._playSong = this._songs[i].file.play();
                    this._visual.miniPlayerOpen = true;
                }
            }
        }

    }

    


}