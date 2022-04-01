class Visual {

    constructor(screen) {
        this._screen = screen;
        this._bg = loadImage('./Images/Bg1.jpg');
        this._bg2 = loadImage('./Images/Bg2.jpg');
        this._bg3 = loadImage('./Images/Bg3.jpg');
        this._bg4 = loadImage('./Images/Bg4.jpg');
        this._home = new Buttom({
            x: 30,
            y: 30,
            b: 334,
            h: 170,
            image: loadImage('./Images/home.png')
        })
        this._buttomSongs = new Buttom({
            x: 710,
            y: 460,
            b: 320,
            image: loadImage('./Images/ButtomSongs.png')
        })
        this._buttomPlaylist = new Buttom({
            x: 1085,
            y: 460,
            b: 320,
            image: loadImage('./Images/ButtomPlaylist.png')
        })

        this._buttomUploadSong = new Buttom({
            x: 895,
            y: 63,
            b: 342,
            h: 85,
            image: loadImage('./Images/Upload.png')
        })

        
    }

    screen0() {
        if (this._screen === 0) {
            image(this._bg, 0, 0);
            this._home.show()
            imageMode(CENTER);
            this._buttomSongs.show();
            this._buttomPlaylist.show();
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
            this._buttomUploadSong.show();
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
            if (this._buttomSongs.clicker(mx, my)) {
                this._screen = 1;
            }
            if (this._buttomPlaylist.clicker(mx, my)) {
                this._screen = 2;
            }
        }
    }

    clickHome(mx,my){
        if (this._home.clicker2(mx,my)) {
            this._screen = 0;
        }
    }

    clickUploadSong(mx,my){
        if(this._buttomUploadSong.clicker2(mx,my) && this._screen === 1){
            const input = document.querySelector('#load-song');
            input.click();
        }
    }

    get screen(){
        return this._screen;
    }

    set screen(newScreen){
        this._screen = newScreen;
    }
}
