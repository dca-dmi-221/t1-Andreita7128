class Buttom {

    constructor({
        x,
        y,
        b,
        h = b,
        image
    }) {
        this._x = x;
        this._y = y;
        this._b = b;
        this._h = h;
        this._image = image;
    }
    //para los botones cuadrados y circulares
    showCenter() {
        imageMode(CENTER);
        image(this._image, this._x, this._y);
        imageMode(CORNER);
    }
    clicker(mx, my) {
        return dist(mx, my, this._x, this._y) < this._b / 2;
    }
    //para los botones que no son cuadrados o circulares
    showCorner() {
        image(this._image, this._x, this._y);
    }
    clicker2(mx, my) {
        return mx > this._x && mx < (this._x + this._b) && my > this._y && my < (this._y + this._h);
    }

    

    set image(newValue) {
        this._image = newValue;
    }

}