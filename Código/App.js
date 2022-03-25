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

        preloadedFiles.forEach((file, index) => {
            this._songs.push(new Song({
                file,
                name: SONGS_DATA[index].name,
                author: SONGS_DATA[index].author
            }))
        })

        console.log(this._songs);
    }

    showSongs(){
        for (let i = 0; i < this._songs.length; i++) {
            const song = this._songs[i];
            text(this._songs.name + '(' + this._songs.author + ')', (50),(30*i)+30);
        }
    }


}