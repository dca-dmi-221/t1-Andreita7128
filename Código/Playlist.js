class Playlist {
    
    constructor() {
        this.songs = [];
        this.playing = false;
    }

    skip() {
        for (let i = 0; i < songs.length; i++) {
            i++;
        }
    }
    back() {
        for (let i = 0; i < songs.length; i++) {
            i--;
        }
    }
    stop() {
        this.playing = false;
    }
    timeList() {
        for (let i = 0; i < songs.length; i++) {
            
        }
    }
    addSong() {
        this.songs.push(new Song())
    }
    getPlaying() {

    }
}