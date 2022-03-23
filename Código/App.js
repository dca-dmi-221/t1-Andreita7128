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
        this.songs = [];

        preloadedFiles.forEach((file, index) => {
            this.songs.push(new Song({
                file,
                name: SONGS_DATA[index].name,
                author: SONGS_DATA[index].author
            }))
        })

        console.log(this.songs);
    }

    click() {

    }

    loadSong() {
    }

}