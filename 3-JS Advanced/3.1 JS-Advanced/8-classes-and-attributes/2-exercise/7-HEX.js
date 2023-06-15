class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        const sum = this.value + (number instanceof Hex ? number.valueOf() : number);
        return new Hex(sum);
    }

    minus(number) {
        const difference = this.value - (number instanceof Hex ? number.valueOf() : number);
        return new Hex(difference);
    }

    static parse(string) {
        const parsedValue = parseInt(string, 16);
        return new Hex(parsedValue);
    }
}

// Example usage:
let FF = new Hex(255);
console.log(FF.toString()); // Output: 0xFF

console.log(FF.valueOf() + 1 === 256); // Output: true

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // Output: 0xF
console.log(a.plus(b).toString() === '0xF'); // Output: true

console.log(Hex.parse('AAA').valueOf()); // Output: 2730
