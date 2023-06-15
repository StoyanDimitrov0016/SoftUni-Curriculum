function factory(library, orders) {
    const executedOrders = [];
    for (const order of orders) {
        const object = {};

        for (const key in order.template) {
            object[key] = order.template[key];
        }

        for (const part of order.parts) {
            object[part] = library[part];
        }
        executedOrders.push(object);
    }
    return executedOrders;
}

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const products = factory(library, orders);

console.log(products);
