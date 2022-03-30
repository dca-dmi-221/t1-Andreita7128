class Song{
    constructor({name,author = "anónimo", file, x = 50, y = 40 }){
        this._name = name;
        this._author = author;
        this._file = file;
        this._x = x;
        this._y = y;
    }

    click(mx,my){
        return mx > this._x && mx < (this._x + (String(this._name.lenght) * 5)) && my > this._y && my < (this._y + 20);
        }



    get name(){
        return this._name;
    }

    get author(){
        return this._author;
    }

    get file(){
        return this._file;
    }
    
}
