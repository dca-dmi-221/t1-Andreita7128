class Song{
    constructor({name,author = "anónimo", file}){
        this._name = name;
        this._author = author;
        this._file = file;
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
