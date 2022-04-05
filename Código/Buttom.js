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

    showCorner() {
        image(this._image, this._x, this._y);
    }

    showCenter() {
        imageMode(CENTER);
        image(this._image, this._x, this._y);
        imageMode(CORNER);
    }

    show2() {
        noStroke();
        fill(80, 5);
        rect(this._x, this._y, this._b, this._h);
        fill(255);
    }

    clicker(mx, my) {
        return dist(mx, my, this._x, this._y) < this._b / 2;
    }

    clicker2(mx, my) {
        return mx > this._x && mx < (this._x + this._b) && my > this._y && my < (this._y + this._h);
    }

    set image(newValue) {
        this._image = newValue;
    }

}