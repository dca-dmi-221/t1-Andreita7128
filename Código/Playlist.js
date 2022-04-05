class Playlist {
    
    constructor({songs,name,x,y}) {
        this._songs = songs;
        this._name = name;
        this._x = x;
        this._y = y;
        this._time = undefined;
        this.time();
        this._numberImage = parseInt(random(0,4))
        this._images = [];
        this._images.push(loadImage('./Images/playlist1.png'));
        this._images.push(loadImage('./Images/playlist2.png'));
        this._images.push(loadImage('./Images/playlist3.png'));
        this._images.push(loadImage('./Images/playlist4.png'));

        this._image = this._images[this._numberImage]; 
        this._b = 218;

    }

    show(){
        imageMode(CENTER);
        image(this._image, this._x, this._y);
        imageMode(CORNER);
        fill(255);
        textSize(20);
        text(`${this._name}`, this._x - 30, this._y + 130)
    }

    time(){
        this._songs.forEach(song => {
            let time;
            time = song.file.duration();
            let suma 
            suma = this._time + song.file.duration();
            this._time = suma
        });
    }

    clicker(mx, my) {
        return dist(mx, my, this._x, this._y) < this._b / 2;
    }

    skip() {
        for (let i = 0; i < this._songs.length; i++) {
            i++;
        }
    }
    back() {
        for (let i = 0; i < this._songs.length; i++) {
            i--;
        }
    }
    timeList() {
        for (let i = 0; i < this._songs.length; i++) {
            
        }
    }
    addSong(song) {
        this._songs.push(song)
    }
    get playing() {
        return this._playing;
    }
    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get songs(){
        return this._songs;
    }

    set x(newX){
        this._x = newX;
    }
    set y(newY){
        this._y = newY;
    }
}