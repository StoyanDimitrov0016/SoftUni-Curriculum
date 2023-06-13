function cookingByNumbers(numberInString, param1, param2, param3, param4, param5) {
    let number = Number(numberInString);
    const commands = [param1, param2, param3, param4, param5];
    commands.forEach(command => {
        switch (command) {
            case 'chop':
                number *= 0.5;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    });
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');