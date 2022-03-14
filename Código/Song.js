class Song{
    constructor({name,author,album,time,path,image}){
        this.name = name;
        this.author = author;
        this.album = album;
        this.time = time;
        this.path = path;
        this.image = image;
        this.playing = false;
    }

    play(){
        
    }

    getPlaying(){
        return this.playing;
    }

    setPlaying(newPlaying){
        this.playing = newPlaying;
    }
}