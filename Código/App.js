class App {
    
    
    constructor() {
        this.click = false


        let songPrueba;
        songPrueba = new Song({
            name: "Cóseme",
            author: "Beret",
            time: 201,
            path: 'Songs/Beret - Cóseme (LETRA).mp3'
        })
    }

    show() {
        noStroke();
        if (this.click === false) {
            fill(0, 180, 0);
        } else {
            fill(180, 0, 0)
        }
        circle(450, 500, 50)
        console.log(songPrueba.getTime())
    }

    loadSong() {
        
        /*let songPrueba2
        songPrueba2= 
        new Song({
            name: "A escondidas",
            author: "Lucah",
            time: 201,
            path: 'Songs/A Escondidas - LUCAH.mp3'
        })*/


    }

    getClick() {
        return this.click;
    }
    setClick(newClick) {
        this.click = newClick;
    }
}

function preload() {
    song = loadSound('Songs/Beret - Cóseme (LETRA).mp3');
}