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
        this._visual = new Visual(0);
        this._playlist1Songs = [];
        this._playlist2Songs = [];
        this._playlist1 = new Playlist(this._playlist1Songs);
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
                y: (40 * index)
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
        this._visual.screen0();
        this._visual.screen1();
        this._visual.screen2();
        this.showSongs();
    }

    pressed() {
        this._visual.click0(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickHome(mouseX, mouseY);
        this._visual.clickUploadSong(mouseX, mouseY);
        this.clickSong(mouseX, mouseY);
    }


    showSongs() {
        if (this._visual.screen === 1) {
            this._songs.forEach(song => song.show())
        }
    }


    clickSong(mx, my) {
        if (this._visual.screen === 1) {
            this._songs.forEach(song => {
                console.log(song.clicker(mx,my))
                if (song.clicker(mx, my) === true) {
                    console.log("click");
                    song.file.play()
                }
            })
        }
    }
}