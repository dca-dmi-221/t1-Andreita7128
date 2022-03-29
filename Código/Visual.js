class Visual {

    constructor(screen) {
        this._screen = screen;
        this._bg = loadImage('/Images/Bg1.jpg');
        this._bg2 = loadImage('/Images/Bg2.jpg');
        this._bg3 = loadImage('/Images/Bg3.jpg');
        this._bg4 = loadImage('/Images/Bg4.jpg');
        this._home = new Buttom({
            x: 30,
            y: 30,
            b: 320,
            h: 320,
            image: loadImage('/Images/home.png')
        })
        this._buttom1 = new Buttom({
            x: 710,
            y: 460,
            b: 320,
            h: 320,
            image: loadImage('/Images/ButtomSongs.png')
        })
        this._buttom2 = new Buttom({
            x: 1085,
            y: 460,
            b: 320,
            h: 320,
            image: loadImage('/Images/ButtomPlaylist.png')
        })
    }

    screen0() {
        if (this._screen === 0) {
            image(this._bg, 0, 0);
            this._home.show()
            imageMode(CENTER);
            this._buttom1.show();
            this._buttom2.show();
            imageMode(CORNER);
            fill(230);
            textSize(50);
            text('¿Qué quieres reproducir?', 600, 150);
            textSize(35);
            text('Canciones', 630, 585);
            text('Playlist', 1030, 585);
        }
    }

    screen1(){
        if(this._screen === 1){
            image(this._bg2,0,0);
            this._home.show()
        }
    }

    screen2(){
        if(this._screen === 2){
            image(this._bg3,0,0);
            this._home.show()

        }
    }

    click0(mx, my) {
        if (this._screen === 0) {
            if (this._buttom1.clicker(mx, my)) {
                this._screen = 1;
                console.log("click")
            }
            if (this._buttom2.clicker(mx, my)) {
                this._screen = 2;
            }
        }
    }

    clickHome(mx,my){
        if (this._home.clicker2(mx,my)) {
            this._screen = 0;
        }
    }
}

//sliderVolume = createSlider(-1, 10);
//sliderVolume.position(700, 500);