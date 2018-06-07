class Vec2 {
    constructor(x, y) {
        // if (Array.isArray(x)) var [x, y] = x;
        if (typeof x === 'object') var {x, y} = x;
        this.x = x || 0;
        this.y = y || 0;
    }

    length2() { return this.x*this.x + this.y*this.y; }
    get length() { return Math.sqrt(this.length2()); }
    set length(val) {
        // this.normalize().scale(val);
        this.scale(val / this.length);
    }
    
    dot(vec) {
        return this.x*vec.x + this.y*vec.y;
    }

    equals(vec) {
        return this.x === vec.x && this.y === vec.y;
    }
    
    // chain
    copy(vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }

    normalize() {
        return this.scale(1 / this.length);
    }

    add(x, y) {
        if (typeof x === 'object') var {x, y} = x;
        this.x += x;
        this.y += y;
        return this;
    }

    sub(x, y) {
        if (typeof x === 'object') var {x, y} = x;
        this.x -= x;
        this.y -= y;
        return this;
    }

    mul(x, y) {
        if (typeof x === 'object') var {x, y} = x;
        this.x *= x;
        this.y *= y;
        return this;
    }

    scale(k) {
        this.x *= k;
        this.y *= k;
        return this;
    }

    // construct
    clone() {
        return new Vec2().copy(this);
    }
}