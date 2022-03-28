class Playlist {
    
    constructor() {
        this._songs = [];
        this._playing = false;
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
    addSong() {
        this._songs.push(new Song())
    }
    get playing() {
        return this._playing;
    }
}