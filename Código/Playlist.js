class Playlist {
    
    constructor({songs,name}) {
        this._songs = [];
        this._name = name;
        this._playing = false;
        this._songs.push(songs)
        console.log(this._songs)

    }

    show(){

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
}