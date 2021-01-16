class Figure {
    constructor(unit = 'cm') {
        this.unit = unit;
    }
    changeUnits(newUnit) {
        this.unit = newUnit;
    }
    fixScale(u) {
        let units = { m: 0.01, cm: 1, mm: 10 };
        return u * units[this.unit]
    }
}

class Circle extends Figure {
    constructor(radius, unit) {
        super(unit);
        this.radius = radius;

    }
    get area() {
        return Math.PI * this.fixScale(this.radius) ** 2
    }
    toString() {
        return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.fixScale(this.radius)}`
    }
}

class Rectangle extends Figure {
    constructor(width, height, unit) {
        super(unit);
        this.width = width;
        this.height = height;

    }
    get area() {
        return this.fixScale(this.width) * this.fixScale(this.height);
    }
    toString() {
        return `Figures units: ${this.unit} Area: ${this.area} - width: ${this.fixScale(this.width)}, height: ${this.fixScale(this.height)}`
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50