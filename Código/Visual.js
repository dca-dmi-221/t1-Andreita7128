class Visual {

    constructor(screen) {
        this._screen = screen;
        this._miniPlayerOpen = false;
        this._pauseSong = false;
        this._sliderVolume = createSlider(-1, 10);
        this._bg = loadImage('./Images/bg1.jpg');
        this._bg2 = loadImage('./Images/bg2.jpg');
        this._bg3 = loadImage('./Images/bg3.jpg');
        this._bg4 = loadImage('./Images/bg4.jpg');
        this._pauseImage = loadImage('./Images/pause.png');

        this._home = new Buttom({
            x: 30,
            y: 30,
            b: 334,
            h: 170,
            image: loadImage('./Images/home.png')
        });
        this._miniPlayer = new Buttom({
            x: 920,
            y: 360,
            b: 360,
            image: loadImage('./Images/player.png')
        });
        this._back = new Buttom({
            x: 955,
            y: 642,
            b: 20,
            h: 25,
            image: loadImage('./Images/back.png')
        });
        this._play = new Buttom({
            x: 980,
            y: 635,
            b: 35,
            image: this._pauseImage
        });
        this._next = new Buttom({
            x: 1015,
            y: 642,
            b: 20,
            h: 25,
            image: loadImage('./Images/skip.png')
        });
        this._closePlayer = new Buttom({
            x: 1260,
            y: 380,
            b: 30,
            image: loadImage('./Images/close.png')
        });
        this._accessPlayer = new Buttom({
            x: 1215,
            y: 675,
            b: 35,
            image: loadImage('./Images/open.png')
        });
        this._buttomSongs = new Buttom({
            x: 710,
            y: 460,
            b: 320,
            image: loadImage('./Images/buttomSongs.png')
        });
        this._buttomPlaylist = new Buttom({
            x: 1085,
            y: 460,
            b: 320,
            image: loadImage('./Images/buttomPlaylist.png')
        });

        this._buttomUploadSong = new Buttom({
            x: 895,
            y: 63,
            b: 342,
            h: 85,
            image: loadImage('./Images/upload.png')
        });

        this._add = new Buttom({
            x: 1185,
            y: 360,
            b: 217,
            image: loadImage('./Images/add.png')
        });

        this._playlist1 = new Buttom({
            x: 760,
            y: 140,
            b: 217,
            image: loadImage('./Images/playlist1.png')
        });

        this._playlist2 = new Buttom({
            x: 1000,
            y: 140,
            b: 77,
            image: loadImage('./Images/playlist2.png')
        });

    }

    screens() {
        this.screen0();
        this.screen1();
        this.screen2();
        this.screen3();
        this._home.showCorner(); 
        this.openMiniPlayer();

    }

    screen0() {
        if (this._screen === 0) {
            image(this._bg, 0, 0);
            this._buttomSongs.showCenter();
            this._buttomPlaylist.showCenter();
            fill(230);
            textSize(50);
            text('¿Qué quieres reproducir?', 600, 150);
            textSize(35);
            text('Canciones', 630, 585);
            text('Playlist', 1030, 585);
        }
    }

    screen1() {
        if (this._screen === 1) {
            image(this._bg2, 0, 0);
            this._buttomUploadSong.showCorner();
        }
    }

    screen2() {
        if(this._screen === 2){
            image(this._bg3,0,0);
        }
    }

    screen3() {
        if (this._screen === 3) {
            image(this._bg4, 0, 0);
            this._playlist1.showCenter();
            this._playlist2.showCenter();
            this._add.showCenter();
        }
    }

    openMiniPlayer(){
        if(this._miniPlayerOpen === true){
            this._miniPlayer.showCorner();
            this._closePlayer.showCenter();
            this._next.showCorner();
            this._back.showCorner();
            this._play.showCorner();
            this._sliderVolume.position(1115, 645);

        } else{
            this._accessPlayer.showCenter();
        }
    }

    changeImage(newImage){
        if(this._pauseSong === false && this._play.clicker(mouseX,mouseY)){
        this._play.image = newImage;
        } else {
            this._play.image = this._playImage;
        }
    }

    clickPlay(mx,my){
        if(this._play.clicker(mx,my)){
            _
        }
    }

    click0(mx, my) {
        if (this._screen === 0) {
            if (this._buttomSongs.clicker(mx, my)) {
                this._screen = 1;
            }
            if (this._buttomPlaylist.clicker(mx, my)) {
                this._screen = 3;
            }
        }
    }

    clickHome(mx, my) {
        if (this._home.clicker2(mx, my)) {
            this._screen = 0;
        }
    }

    clickUploadSong(mx, my) {
        if (this._buttomUploadSong.clicker2(mx, my) && this._screen === 1) {
            const input = document.querySelector('#load-song');
            input.click();
        }
    }

    clickOpen(mx, my){
        if(this._accessPlayer.clicker(mx,my)){
            this._miniPlayerOpen = true;
        }
    }

    clickClose(mx, my){
        if(this._closePlayer.clicker(mx,my)){
            this._miniPlayerOpen = false;
        }
    }

    clickPause(mx, my, newImage){
        if (this._play.clicker(mx,my)){
            this.changeImage(newImage)
        }
    }



    get miniPlayerOpen(){
        return this._miniPlayerOpen;
    }

    get screen() {
        return this._screen;
    }

    set miniPlayerOpen(newValue) {
        this._miniPlayerOpen = newValue;
    }

    set screen(newScreen) {
        this._screen = newScreen;
    }

    
}

