function stringLength(string1, string2, string3) {
    const allStringsLength = string1.length + string2.length + string3.length;
    const averageLength = Math.floor(allStringsLength / 3);
    console.log(allStringsLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake');