function solve() {
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
    return { Figure, Circle, Rectangle };
}
