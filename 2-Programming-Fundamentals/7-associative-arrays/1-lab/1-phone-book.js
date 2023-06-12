function phoneBook(entries) {
    let phoneBook = {};

    for (const entry of entries) {
        let [name, phoneNumber] = entry.split(' ');
        phoneBook[name] = phoneNumber;
    }

    for (const name in phoneBook) {
        console.log(name, '->', phoneBook[name]);
    }
}