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
        if (this.click === false) {
            fill(0, 180, 0);
        } else {
            fill(180, 0, 0)
        }
        circle(450, 500, 50)
    }

    click(mx,my){
        if(dist(mx,my,this._x,this.y)<this._b/2){
            !this._click;
        }
    }

    //image(this._image,this._x,this._y,this._b,this._h);
    //}
}