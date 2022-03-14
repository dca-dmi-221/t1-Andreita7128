class Song{
    constructor({name,author = "anónimo",time,path}){
        this.name = name;
        this.author = author;
        this.time = time;
        this.path = path;
        this.playing = false;
    }

    play(){
        
    }
    getTime(){
    return this.time
    }

    getPlaying(){
        return this.playing;
    }

    setPlaying(newPlaying){
        this.playing = newPlaying;
    }
}