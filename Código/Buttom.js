class Buttom {

    constructor({
        x,
        y,
        b,
        h,
        image
    }) {
        this._x = x;
        this._y = y;
        this._b = b;
        this._h = h;
        this._image = image;
        this._click = false
    }

    show() {
        noStroke();
        if (this._click === true) {
            fill(0, 180, 0);
        } else {
            fill(180, 0, 0);
        }
        circle(450, 500, 50);
    }

    clicker(mx,my){
        if(dist(mx,my,this._x,this._y)<this._b/2){
            this._click = !this._click;
            console.log('click')
        }
    }


    get click(){
        return this._click;
    }

    set click(newClick){
        this._click = newClick
    }

    //image(this._image,this._x,this._y,this._b,this._h);
    //}
}