function findValidPhoneNums(phoneNumberList) {
    const validPhoneNumbers = [];
    const pattern = /\+359([ |-])2\1\d{3}\1\d{4}\b/g;
    let match = pattern.exec(phoneNumberList);

    while (match) {
        validPhoneNumbers.push(match[0])
        match = pattern.exec(phoneNumberList)
    }

    console.log(validPhoneNumbers.join(', '));
}