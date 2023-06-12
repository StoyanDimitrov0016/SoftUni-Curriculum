function creatingAddressBook(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let alphabeticalAddressBook = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of alphabeticalAddressBook) {
        console.log(name, '->', address);
    }
}
