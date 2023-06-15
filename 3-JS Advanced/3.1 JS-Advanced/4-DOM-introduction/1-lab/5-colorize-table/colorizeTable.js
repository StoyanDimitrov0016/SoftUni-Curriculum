function colorize() {
    let tableLines = document.querySelectorAll('tr');

    for (let i = 1; i < tableLines.length; i += 2) {
        const line = tableLines[i];
        line.style.backgroundColor = 'Teal';
    }
}