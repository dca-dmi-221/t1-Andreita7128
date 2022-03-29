class App {


    constructor() {
        this._songs = [];
        this.preload();
        console.log(this._songs);
        
    }

    showSongs() {
        for (let i = 0; i < this._songs.length; i++) {
            const song = this._songs[i];
            text(this._songs.name + '(' + this._songs.author + ')', (50), (30 * i) + 30);
        }
    }




    preload() {

        this._songs.push(new Song({
            name: "Lo Siento",
            author: "Beret",
            file: loadSound('/Songs/cancion0.mp3')
        }))
        this._songs.push(new Song({
            name: "A Escondidas",
            author: "Lucah",
            file: loadSound('/Songs/cancion1.mp3')
        }))
        this._songs.push(new Song({
            name: "Cuando se va el Amor",
            author: "Kany García",
            file: loadSound('/Songs/cancion2.mp3')
        }))
        this._songs.push(new Song({
            name: "Perfect Two",
            file: loadSound('/Songs/cancion3.mp3')
        }))
        this._songs.push(new Song({
            name: "De Ellos Aprendí",
            author: "Beret",
            file: loadSound('/Songs/cancion4.mp3')
        }))
    }

}