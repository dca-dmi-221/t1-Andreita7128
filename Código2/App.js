class App {


    constructor() {
        this._songs = [];
        this.preload();
        console.log(this._songs);
        this._bg = loadImage('/Images/Backg1.jpg');
        this._buttom1 = new Buttom({
            x: 550,
            y: 300,
            b: 320,
            h: 320,
            image: loadImage('/Images/ButtomSongs.png')
        })
        this._buttom2 = new Buttom({
            x: 900,
            y: 300,
            b: 320,
            h: 320,
            image: loadImage('/Images/ButtomPlaylist.png')
        })
    }

    showSongs() {
        for (let i = 0; i < this._songs.length; i++) {
            const song = this._songs[i];
            text(this._songs.name + '(' + this._songs.author + ')', (50), (30 * i) + 30);
        }
    }

    screen0() {
        image(this._bg, 0, 0);
        this._buttom1.show();
        this._buttom2.show();
        fill(230);
        textSize(50);
        text('¿Qué quieres reproducir?', 600, 150);
        textSize(35);
        text('Canciones', 627, 585);
        text('Playlist', 1000, 585);
    }

    click0(mx,my){
        this._buttom1.clicker(mx,my);
        this._buttom2.clicker(mx,my);
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