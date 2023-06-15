function extensibleObject() {
    function Extensible() { }

    Extensible.prototype.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                Extensible.prototype[prop] = template[prop];
            } else {
                this[prop] = template[prop];
            }
        }
    };

    return new Extensible();
}

const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
};

myObj.extend(template);
console.log(myObj);
