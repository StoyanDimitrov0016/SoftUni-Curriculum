function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let buff = "";
    for (let i = floors; i >= 1; i--) {
        for (j = 0; j < rooms; j++) {
            if (i === floors) {
                buff += `L${i}${j} `;
            } else if (i % 2 == 0) {
                buff += `O${i}${j} `;
            } else {
                buff += `A${i}${j} `
            }
        }
        console.log(buff);
        buff = "";
    }
}