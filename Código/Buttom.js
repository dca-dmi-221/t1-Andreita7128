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
        image(this._image, this._x, this._y);
    }

    clicker(mx, my) {
        return dist(mx, my, this._x, this._y) < this._b / 2;
    }


    get click() {
        return this._click;
    }

    set click(newClick) {
        this._click = newClick
    }


}