function createCalculator() {
    let value = 0;

    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    };
};

module.exports = { createCalculator };

const q = createCalculator();
q.add(2);
console.log(q.get());
