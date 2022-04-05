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
        this._b = undefined
        this._h = 20;
        this.lengthClick();

    }

    
    clicker(mx, my) {
        return mx > this._x && mx < (this._x + this._b) && my > this._y - 20 && my < ((this._y - 20) + this._h);
    }

    lengthClick(){
       this._b = (String(this.name).length * 15) + (String(this.author).length * 15)
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

    set x(newX){
        this._x = newX;
    }
    set y(newY){
        this._y = newY;
    }
}