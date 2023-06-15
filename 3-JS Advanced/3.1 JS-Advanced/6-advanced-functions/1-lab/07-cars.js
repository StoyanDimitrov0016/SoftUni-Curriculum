function createCars(inputCommands) {
    const cars = {};

    function carFactory(action, name, additionalAction, additionalInfo) {

        function create() {
            cars[name] = {};

            if (additionalAction === "inherit") {
                cars[name] = Object.create(cars[additionalInfo]);
            }
        }

        function set() {
            cars[name][additionalAction] = additionalInfo;
        }

        function print() {
            let props = {};
            let obj = cars[name];

            while (obj) {
                props = { ...props, ...obj };
                obj = Object.getPrototypeOf(obj);
            }

            const propertyKeys = Object.keys(props);

            const output = propertyKeys
                .map(key => `${key}:${props[key]}`)
                .join(",");
            console.log(output);
        }

        const commands = {
            create,
            set,
            print
        };

        commands[action]();
    }
    inputCommands.forEach(input => {
        carFactory(...input.split(" "));
    });
}
createCars([
    'create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho'
    , 'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'])