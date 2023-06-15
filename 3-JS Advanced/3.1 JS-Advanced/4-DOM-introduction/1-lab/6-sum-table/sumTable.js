function sumTable() {
    const tableLines = document.querySelectorAll('tr td');
    let sum = 0;
    for (let i = 1; i < tableLines.length - 1; i += 2) {
        const productPrice = Number(tableLines[i].textContent);
        sum += productPrice;
    }
    document.getElementById('sum').textContent = sum;
}   