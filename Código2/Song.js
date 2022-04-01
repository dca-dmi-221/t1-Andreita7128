class Song {
    constructor({
        x,
        y,
        name,
        author = "anónimo",
        file
    }) {
        this._x = x;
        this._y = y;
        this._name = name;
        this._author = author;
        this._file = file;
        this._b = 350;
        this._h = 20;
    }

    show() {
        noStroke();
        fill(10,80);
        rect(this._x, this._y + 285, this._b, this._h);
        fill(255)
        textSize(15);
        text(this._name + ' (' + this._author + ') ' + (this._file.duration() / 60).toFixed(2) + 'min', this._x, this._y + 300);
    }

    clicker(mx, my) {
        return mx > this._x && (this._x + this._b) && my > this._y && my < (this._y + this._h)
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