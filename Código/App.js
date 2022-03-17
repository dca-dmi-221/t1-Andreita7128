const SONGS_DATA = [{
        name: "Cóseme",
        author: "Beret",
    },
    {
        name: "Cóseme2",
        author: "Beret2",
    }
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