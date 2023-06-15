class Stringer {
    constructor(innerString, innerLength) {
      this.innerString = innerString;
      this.innerLength = innerLength;
    }
  
    increase(length) {
      this.innerLength += length;
      return this;
    }
  
    decrease(length) {
      this.innerLength = Math.max(0, this.innerLength - length);
      return this;
    }
  
    toString() {
      let textToShow = this.innerString.substring(0, this.innerLength);
  
      if (this.innerString.length > this.innerLength) {
        textToShow += '...';
      }
  
      return textToShow;
    }
  }
  

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test 