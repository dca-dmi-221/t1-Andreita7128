class App {
    constructor() {
        this.click = false
    }

    show() {
        noStroke();
        if (this.click === false) {
            fill(0, 180, 0);
        } else {
            fill(180, 0, 0)
        }
        circle(450, 500, 50)
    }

    play(mx, my) {
        let song;
        song = loadSound('Songs/Beret - Cóseme (LETRA).mp3');
        if (dist(mx, my, 450, 500) < 25 && this.click === false) {
            song.play(); 
            !this.click
        } else if (dist(mx, my, 450, 500) < 25 && this.click === true) {
            song.stop();
            !this.click
        }
    }
    getClick(){
        return this.click;
    }
    setClick(newClick){
        this.click = newClick;
    }
}