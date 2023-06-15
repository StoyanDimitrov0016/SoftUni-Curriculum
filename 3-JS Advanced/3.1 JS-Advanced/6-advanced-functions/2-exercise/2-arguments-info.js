function argumentsInfo() {
    const argTypeCount = {};

    Array.from(arguments).forEach(argument => {
        const typeArg = typeof argument;
        console.log(`${typeArg}: ${argument}`)
        if (!argTypeCount[typeArg]) {
            argTypeCount[typeArg] = 0;
        }
        argTypeCount[typeArg]++;
    });

    const argCounts = Object.entries(argTypeCount)
        .sort((a, b) => b[1] - a[1]);

    argCounts.forEach(arg => console.log(`${arg[0]} = ${arg[1]}`));
}
argumentsInfo('cat', 42, function () { console.log('Hello world!') }, function () { console.log('Hello world!') }, function () { console.log('Hello world!') });