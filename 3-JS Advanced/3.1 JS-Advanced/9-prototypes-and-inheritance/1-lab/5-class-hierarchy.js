function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
            this.validUnits = ['m', 'cm', 'mm'];
            this.converts = {
                'm': 0.01,
                'cm': 1,
                'mm': 10
            }
        }

        get area() {
            return null; // Placeholder, needs to be implemented
        }

        changeUnits(value) {
            if (this.validUnits.includes(value)) {
                this.units = value;
            } else {
                throw new Error(`Invalid unit: ${value}`);
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            const convertedRadius = this.radius * this.converts[this.units];
            return Math.PI * Math.pow(convertedRadius, 2);
        }

        toString() {
            const convertedRadius = this.radius * this.converts[this.units];
            return `${super.toString()} Area: ${this.area} - radius: ${convertedRadius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.width = width;
            this.height = height;

            if (units) {
                this.units = units;
            }
        }

        get area() {
            const convertedWidth = this.width * this.converts[this.units];
            const convertedHeight = this.height * this.converts[this.units];
            return convertedHeight * convertedWidth;
        }

        toString() {
            const convertedWidth = this.width * this.converts[this.units];
            const convertedHeight = this.height * this.converts[this.units];
            return `${super.toString()} Area: ${this.area} - width: ${convertedWidth}, height: ${convertedHeight}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}

let c = new (solve().Circle)(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new (solve().Rectangle)(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); // Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
