class Visual {

    constructor(screen) {
        this._screen = screen;
        this._miniPlayerOpen = false;
        this._error = false;
        this._bg = loadImage('./Images/bg1.jpg');
        this._bg2 = loadImage('./Images/bg2.jpg');
        this._bg3 = loadImage('./Images/bg3.jpg');
        this._bg4 = loadImage('./Images/bg4.jpg');



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
            image: loadImage('./Images/play.png')
        });
        this._stop = new Buttom({
            x: 1015,
            y: 635,
            b: 35,
            image: loadImage('./Images/stop.png')
        });
        this._next = new Buttom({
            x: 1050,
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
            x: 1240,
            y: 685,
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
        this._errorImage = new Buttom({
            x: 50,
            y: 50,
            b: 1150,
            h: 642,
            image: loadImage('./Images/error.png')
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
        }
    }

    screen1() {
        if (this._screen === 1) {
            image(this._bg2, 0, 0);
            this._buttomUploadSong.showCorner();
        }
    }

    screen2() {
        if (this._screen === 2) {
            image(this._bg4, 0, 0);
            this._add.showCenter();
        }
    }

    screen3() {
        if (this._screen === 3) {
            image(this._bg3, 0, 0);
        }
    }

    openMiniPlayer() {
        if (this._miniPlayerOpen === true) {
            this._miniPlayer.showCorner();
            this._closePlayer.showCenter();
            this._next.showCorner();
            this._back.showCorner();
            this._play.showCorner();
            this._stop.showCorner();
        } else {
            this._accessPlayer.showCenter();
        }
    }

    screenError() {
        if (this._error === true) {
            this._errorImage.showCorner();
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

    clickOpen(mx, my) {
        if (this._accessPlayer.clicker(mx, my)) {
            this._miniPlayerOpen = true;
        }
    }

    clickClose(mx, my) {
        if (this._closePlayer.clicker(mx, my)) {
            this._miniPlayerOpen = false;
        }
    }

    clickError(mx, my) {
        return this._errorImage.clicker2(mx, my)
    }

    clickPlay(mx, my) {
        return this._play.clicker2(mx, my)
    }

    clickStop(mx, my) {
        return this._stop.clicker2(mx, my)
    }

    clickNext(mx, my) {
        return this._next.clicker2(mx, my);
    }

    clickBack(mx, my) {
        return this._back.clicker2(mx, my);
    }



    get miniPlayerOpen() {
        return this._miniPlayerOpen;
    }

    get screen() {
        return this._screen;
    }

    get error() {
        return this._error;
    }

    set error(newValue) {
        this._error = newValue;
    }

    set miniPlayerOpen(newValue) {
        this._miniPlayerOpen = newValue;
    }

    set screen(newScreen) {
        this._screen = newScreen;
    }


}