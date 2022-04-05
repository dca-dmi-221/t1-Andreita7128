class Song {
    constructor({
        name,
        author = "anónimo",
        file,
        x,
        y
    }) {
        this._name = name;
        this._author = author;
        this._file = file;
        this._x = x;
        this._y = y;
        this._b = String(this.name).length * 5
        this._h = 20;

    }

    show() {
        fill(255)
        textSize(15);
        text(this._name + ' (' + this._author + ') ' + (this._file.duration() / 60).toFixed(2) + 'min', this._x, this._y + 250);
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get file() {
        return this._file;
    }

}