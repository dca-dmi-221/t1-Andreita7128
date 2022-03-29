class Visual{
    
    constructor(){
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
}