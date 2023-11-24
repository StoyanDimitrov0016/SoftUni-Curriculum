function books(input) {
    let index = 1;
    let checkedBooks = 0;
    let wantedBook = input[0];
    let inputText = input[index];
    let noMore = "No More Books";
    let doesSheFoundTheBook = false;
    while (inputText !== noMore) {

        if (inputText === wantedBook) {
            doesSheFoundTheBook = true;
            break;
        }
        checkedBooks++;
        index++;
        inputText = input[index];

    }
    if (doesSheFoundTheBook) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!\nYou checked ${checkedBooks} books.`);
    }
}