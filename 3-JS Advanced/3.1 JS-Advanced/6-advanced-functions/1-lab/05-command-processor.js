function solution() {
    let initialText = '';

    function append(text) {
        initialText += text;
    }

    function removeStart(position) {
        initialText = initialText.slice(position);
    }

    function removeEnd(position) {
        initialText = initialText.slice(0, -position);
    }

    function print() {
        console.log(initialText);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();