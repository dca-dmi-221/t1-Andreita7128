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
]

class App {


    constructor(preloadedFiles) {
        this._songs = [];
        this._visual = new Visual(screen);

        preloadedFiles.forEach((element, index) => {
            this._songs.push(new Song({
                name: SONGS_DATA[index].name,
                author: SONGS_DATA[index].author
            }))
        })

        console.log(this._songs);
    }

    draw() {
        this._visual.screen0();
        this._visual.screen1();
        this._visual.screen2();
        this.showSongs();
    }

    pressed() {
        this._visual.click0(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
    }


    showSongs() {
        if (this._visual.screen === 1) {
            for (let i = 0; i < this._songs.length; i++) {
                const song = this._songs[i];
                fill(255)
                textSize(30);
                text(song.name + ' (' + song.author + ')', (50), (40 * i) + 300);
            }
        }
    }
    

    clickSong(){
        this._songs.forEach(element => {
        });
    }
    


}